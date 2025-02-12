/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

export default function DisableInspect() {
    useEffect(() => {
        // Disable right-click
        const disableContextMenu = (event: MouseEvent) => event.preventDefault();
        document.addEventListener('contextmenu', disableContextMenu);

        // Disable various inspect element and copy shortcuts
        const disableKeyShortcuts = (event: KeyboardEvent) => {
            const forbiddenKeys = [
                { keyCode: 123 }, // F12
                { ctrlKey: true, shiftKey: true, keyCode: 73 }, // Ctrl+Shift+I
                { ctrlKey: true, keyCode: 85 }, // Ctrl+U
                { ctrlKey: true, keyCode: 67 } // Ctrl+C
            ];

            forbiddenKeys.forEach((key) => {
                if (
                    Object.keys(key).every(
                        (prop) => (event as any)[prop] === (key as any)[prop]
                    )
                ) {
                    event.preventDefault();
                }
            });
        };

        document.addEventListener('keydown', disableKeyShortcuts);

        // Cleanup event listeners when the component unmounts
        return () => {
            document.removeEventListener('contextmenu', disableContextMenu);
            document.removeEventListener('keydown', disableKeyShortcuts);
        };
    }, []);

    return null;
}