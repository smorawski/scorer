interface PoKIconProps {
  width?: number;
  height?: number;
  color?: string;
};

const PoKIcon = ({ width = 25, height = 25, color = "#000" }: PoKIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29.104165 29.104165"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">

      <g transform="translate(-22.686997,-1.6039987)">
        <path
          fill={color}
          stroke={color}
          strokeWidth="0.264583px"
          d="m 47.625001,19.579166 c -3.974006,3.525108 -10.583333,6.614584 -10.583334,10.583332 1e-6,-3.968748 -6.116956,-7.155243 -10.583333,-10.583332 l 5.291667,-15.8749993 1.322917,15.8749993 3.96875,2.645834 3.96875,-2.645834 1.322916,-15.8749993 z"
        />
        <g transform="translate(0,1.322917)">
          <path
            fill={color}
            stroke={color}
            strokeWidth="0.264583px"
            d="M 37.041668,18.520833 39.687501,15.875 v -5.291667 0 L 37.041668,2.6458336 34.395834,10.583333 V 15.875 Z"
          />
        </g>
      </g>
    </svg>
  );
}

export default PoKIcon;
