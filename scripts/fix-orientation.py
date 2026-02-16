#!/usr/bin/env python3
"""
Fix image orientation using EXIF data.
Uses ImageOps.exif_transpose() to properly rotate images based on their EXIF orientation tag.
"""

import os
from pathlib import Path
from PIL import Image, ImageOps

def fix_image_orientation(image_path):
    """Fix the orientation of a single image using EXIF data."""
    try:
        with Image.open(image_path) as img:
            # Get original format
            original_format = img.format

            # Check if image has EXIF orientation data
            exif = img.getexif()
            orientation = exif.get(274) if exif else None  # 274 is the orientation tag

            if orientation and orientation != 1:
                # Apply EXIF transpose to fix orientation
                fixed_img = ImageOps.exif_transpose(img)

                # Save with same quality settings
                if original_format == 'JPEG':
                    fixed_img.save(image_path, 'JPEG', quality=95, exif=b'')
                else:
                    fixed_img.save(image_path)

                print(f"Fixed: {image_path} (orientation was {orientation})")
                return True
            else:
                print(f"Skipped: {image_path} (no rotation needed)")
                return False

    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        return False

def process_directory(directory):
    """Process all images in a directory."""
    image_extensions = {'.jpg', '.jpeg', '.png'}
    fixed_count = 0
    skipped_count = 0
    error_count = 0

    for root, dirs, files in os.walk(directory):
        for file in files:
            ext = Path(file).suffix.lower()
            if ext in image_extensions:
                image_path = os.path.join(root, file)
                result = fix_image_orientation(image_path)
                if result:
                    fixed_count += 1
                elif result is False:
                    skipped_count += 1
                else:
                    error_count += 1

    return fixed_count, skipped_count, error_count

def main():
    # Get the project root (parent of scripts directory)
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    images_dir = project_root / 'public' / 'images'

    print(f"Processing images in: {images_dir}")
    print("-" * 50)

    total_fixed = 0
    total_skipped = 0
    total_errors = 0

    # Process each subdirectory
    for subdir in ['projects', 'polebarns']:
        dir_path = images_dir / subdir
        if dir_path.exists():
            print(f"\nProcessing {subdir}/...")
            fixed, skipped, errors = process_directory(dir_path)
            total_fixed += fixed
            total_skipped += skipped
            total_errors += errors

    print("\n" + "=" * 50)
    print(f"Summary:")
    print(f"  Fixed: {total_fixed}")
    print(f"  Skipped (no rotation needed): {total_skipped}")
    print(f"  Errors: {total_errors}")

if __name__ == '__main__':
    main()
