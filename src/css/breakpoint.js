const size = {
    tabletMobile: "991px",
    mobile: "767px",
    tabletPort: {
     start: "767px",
     end: "1024px"   
    },
    tabletLand: {
      start: "1024px",
      end: "1440px",  
    }
  };
export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tabletPort: `(min-width: ${size.tabletPort.start}) and (max-width: ${size.tabletPort.end}) `,
    tabletMobile: `(max-width: ${size.tabletMobile})`,
    tabletLand: `(min-width: ${size.tabletLand.start}) and (max-width: ${size.tabletLand.end}) `,
};