import { IoSunnySharp } from "react-icons/io5";
import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
    const {toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="theme-toggle">
            <IoSunnySharp />
        </button>
    );
}
