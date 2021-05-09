const Settings = () => {
    return (
        <div>
            <h3>Settings</h3>
            <button>Easy</button>
            <button>Normal</button>
            <button>Hard</button>
            <button>Custom
                <label>Width</label>
                <input type="range" name="width" id="" />
                <label>Heigth</label>
                <input type="range" name="heigth" id="" />
                <label>Outbreaks</label>
                <input type="range" name="outbreaks" id="" />
            </button>
        </div>
    )
}

export default Settings
