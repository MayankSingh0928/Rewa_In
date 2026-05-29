from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path.home() / "Downloads"
DESTINATION = ROOT / "src" / "assets" / "images"

IMAGE_SPECS = {
    "8d14730024c411eca94d0a58a9feac02.jfif": ("hotel-hero.webp", 1600, 76),
    "bcb54e7a659811eda9740a58a9feac02.avif": ("hotel-corridor.webp", 1200, 74),
    "def7b74c659911eda0710a58a9feac02.jpg": ("hotel-corridor-square.webp", 900, 74),
    "unnamed.webp": ("hotel-front.webp", 1000, 76),
    "1fe0be6e24c511ec9fba0a58a9feac02.jfif": ("room-deluxe.webp", 1000, 74),
    "1fea832c24c511ec827a0a58a9feac02.avif": ("room-premium.webp", 1000, 74),
    "3a71c23c1b6011ec9aa00a58a9feac02.avif": ("room-classic.webp", 1000, 74),
    "2e1913c81b6011ecb89b0a58a9feac02.avif": ("room-executive.webp", 1000, 74),
    "ab5b75ca24c411ec827a0a58a9feac02.avif": ("bathroom.webp", 1000, 74),
}


def optimize_image(source_name, output_name, max_width, quality):
    source_path = SOURCE / source_name
    output_path = DESTINATION / output_name

    with Image.open(source_path) as image:
        image = ImageOps.exif_transpose(image)
        image.thumbnail((max_width, max_width), Image.Resampling.LANCZOS)

        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGBA" if "A" in image.getbands() else "RGB")

        output_path.parent.mkdir(parents=True, exist_ok=True)
        image.save(output_path, "WEBP", quality=quality, method=6)


def main():
    for source_name, spec in IMAGE_SPECS.items():
        optimize_image(source_name, *spec)


if __name__ == "__main__":
    main()
