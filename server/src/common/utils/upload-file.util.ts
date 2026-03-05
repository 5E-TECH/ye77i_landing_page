import { BadRequestException } from '@nestjs/common';
import type { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { randomUUID } from 'crypto';
import { extname, join } from 'path';
import { existsSync, mkdirSync, unlinkSync } from 'fs';
import { diskStorage } from 'multer';

const ALLOWED_IMAGE_TYPES = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
]);

export const imageUploadOptions = (folder: string): MulterOptions => ({
  storage: diskStorage({
    destination: (_req, _file, cb) => {
      const destinationPath = join(process.cwd(), 'uploads', folder);
      if (!existsSync(destinationPath)) {
        mkdirSync(destinationPath, { recursive: true });
      }
      cb(null, destinationPath);
    },
    filename: (_req, file, cb) => {
      const ext = extname(file.originalname || '').toLowerCase();
      cb(null, `${folder}-${randomUUID()}${ext}`);
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024,
    files: 1,
  },
  fileFilter: (_req, file, cb) => {
    if (!ALLOWED_IMAGE_TYPES.has(file.mimetype)) {
      cb(new BadRequestException('Only JPEG/PNG/WEBP/GIF images are allowed'), false);
      return;
    }
    cb(null, true);
  },
});

export const removeUploadedFile = (filePath: string | null | undefined): void => {
  if (!filePath) {
    return;
  }

  const normalized = filePath.startsWith('/uploads/')
    ? filePath.replace('/uploads/', '')
    : filePath.replace(/^\/+/, '');

  const absolute = join(process.cwd(), 'uploads', normalized);
  if (existsSync(absolute)) {
    unlinkSync(absolute);
    return;
  }

  // Backward compatibility for old DB records that only store a filename.
  if (!normalized.includes('/')) {
    const legacyFolders = ['projects', 'blogs', 'members'];
    for (const folder of legacyFolders) {
      const legacyPath = join(process.cwd(), 'uploads', folder, normalized);
      if (existsSync(legacyPath)) {
        unlinkSync(legacyPath);
        return;
      }
    }
  }
};
