'use client';


  const Colors = {
        blue: "bg-blue-500",
        red: "bg-red-500",
        green: "bg-green-500",
        yellow: "bg-yellow-500",
        gray: "bg-gray-500",
        success: "bg-green-600",
        danger: "bg-red-600",
    };

export default function Button({
    text,
    onclick,
    color,
    margin,
    padding,
    width,
    height,
}: {
    onclick: () => void;
    width: number;
    height: number;
    text: string;
    color: keyof typeof Colors;
    margin: number;
    padding: number;
}) {
     const bgColor = Colors[color] ;
    const Padding = `p-${padding}`; 

    return (
            <button
                onClick={onclick}
                className={`rounded ${bgColor} ${Padding}`}
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    margin: `${margin}px`,
                }}
            >
                {text}
            </button>
    );
}
