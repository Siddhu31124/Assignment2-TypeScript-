import { LIMIT_OF_SECTION } from "../Constants";
const multiSelectFormat =( value:string[] ) : string  => {

    if (value.length > LIMIT_OF_SECTION) {
    const firstValue:string = value[0];
    const secondValue:string = value[1];
    return (
        `${firstValue} ${secondValue}
        ${value.length - LIMIT_OF_SECTION > 0
          ? `+${value.length - LIMIT_OF_SECTION}`
          : ""}`
    );
  } else if (value.length === 0) {
    return "No Data";
  } else {
    return value.join(" ");
  }
}

export default multiSelectFormat
