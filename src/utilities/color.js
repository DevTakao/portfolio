export function hexToRgb(hex, opacity = 1) {
  // Remove the hash if it exists
  hex = hex.replace(/^#/, "");

  // Parse the hex values
  const bigint = parseInt(hex, 16);

  // Extract RGB components
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Calculate the RGB values with opacity
  const rgba = `rgba(${r}, ${g}, ${b}, ${opacity})`;

  return rgba;
}
