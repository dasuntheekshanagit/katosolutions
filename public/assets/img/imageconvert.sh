#!/bin/bash

# Directory containing the images
input_dir="icons"
output_dir="icons"

# Create output directory if it doesn't exist
mkdir -p "$output_dir"

# Loop through all files in the input directory
for img in "$input_dir"/*; do
    # Get the file name without extension
    filename=$(basename -- "$img")
    filename="${filename%.*}"
    
    # Convert to WebP
    cwebp "$img" -o "$output_dir/$filename.webp"
done

