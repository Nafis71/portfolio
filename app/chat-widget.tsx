"use client";

import Script from "next/script";

declare global {
  interface Window {
    Chat?: {
      init: (config: {
        pluginKey: string;
        options?: Record<string, unknown>;
      }) => void;
    };
  }
}

export default function ChatWidget() {
  return (
    <>
      {/* Socket.io from CDN */}
      <Script
        src="https://cdn.socket.io/4.7.5/socket.io.min.js"
        strategy="afterInteractive"
      />

      {/* Ulka Chat SDK */}
      <Script
        src="https://ulka.chat/sdk/1.0.9/chat.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Initialize the chat SDK after the script loads
          // API URL is hardcoded, only pluginKey is required
          if (typeof window !== "undefined" && window.Chat) {
            window.Chat.init({
              pluginKey: "3027fc24-0b10-46be-a121-7aaea2d266c1",
              // iconPath: './ulka.png', // Optional: Custom icon path/URL for the toggle button
              options: {
                // Optional: Customization options
                toggleButtonBackgroundColor: "#2091f2", // Background color when showing chat icon
                toggleButtonOpenBackgroundColor: "#2091f2", // Background color when showing X icon (open state)
                toggleButtonBoxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)", // Box shadow for toggle button
                toggleButtonSize: 54, // Size of toggle button (width and height in pixels)
                toggleButtonPosition: { bottom: "24px", right: "24px" }, // Position of toggle button
                closeIconColor: "#ffffff", // Color of the X icon when chat is open
                chatIconColor: "#ffffff", // Color of the chat icon (if using default icon)
              },
            });
          }
        }}
      />
    </>
  );
}
