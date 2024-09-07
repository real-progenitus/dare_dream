import { Crimson_Text } from "next/font/google";

// Configure the font, you can set weights and styles
const crimsonText = Crimson_Text({
  subsets: ["latin"], // You can customize the subsets if needed
  weight: ["400", "600", "700"], // Optional: Use specific font weights
  style: ["normal", "italic"], // Optional: Use normal or italic styles
  display: "swap", // Optional: Controls font loading behavior
});

export { crimsonText };
