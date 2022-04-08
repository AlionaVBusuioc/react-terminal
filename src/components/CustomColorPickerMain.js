import * as React from "react";
import Console from "./Console";

const CustomCulorPickerMain = () => {

    const [isOpen, setOpen] = React.useState(false)
    const [colorize, setColorize] = React.useState({
        color: {
            rgb:{
                r: 33,
                b: 143,
                g: 34,
                a: 1, 
            },
            hex:'#21228f',
            hsl:{
                a: 1,
                h: 239,
                l: 0,
                s: 5,
            }
      }
    })

    const handleOnClick = () => {
      setOpen(prevState => {
        return {
         isOpen: !prevState,
        // isOpen: true,
       }});
     };

    const handleOnClose = (e) => {
      setOpen(false)
    }
   
  /** Memorized function to avoid setting color if you set the same color */
  const handleOnChange = React.useCallback(
    (color) => {
      setColorize({
        color: {
          rgb:color.rgb,
          hex:color.hex,
          hsl:color.hsl
        },
      }); 
    },
    [colorize, setColorize],
  );

    return (
      <div>
        <Console 
          open={isOpen}
          colorize={colorize}
          onChange={handleOnChange}
          onClick={handleOnClick}
          onClose={handleOnClose}
        />
      </div>
    );
}
export default CustomCulorPickerMain;