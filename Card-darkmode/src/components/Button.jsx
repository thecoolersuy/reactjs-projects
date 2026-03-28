import useTheme from "../context/Theme";

export default function Button() {
    
    const {modeStatus,lightMode,darkMode } = useTheme()
    const themeChange =(e)=>{
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus){
          darkMode()
        }else{
          lightMode()
        }
    }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
    <input 
        type="checkbox" 
        className="sr-only peer" 
        value=""
        onChange={themeChange}
        checked={modeStatus === "dark"}
    />
    <div className="w-11 h-6 rounded-full bg-[#ffffff]
        peer-checked:bg-blue-600 
        after:content-[''] after:absolute after:top-[5px] after:left-[2px] 
        after:h-5 after:w-5 after:bg-white after:border after:border-gray-300 
        after:rounded-full after:transition-all after:
        peer-checked:after:translate-x-full peer-checked:after:border-white">
    </div>
    <span className="ml-3 text-[20px] text-black dark:text-white">Toggle Theme</span>
</label>
    );
}

