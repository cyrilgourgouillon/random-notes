import { useState, useEffect } from 'react';
import { guitarStringNames } from '../config';
import {
  fretNumbers,
  fretboardDots,
  labelWidth,
  fretWidth,
  topPadding,
  stringGap,
  fretNumberTop,
} from '../config/constants/fretboard';

type FretboardMarker = {
  fret: number;
  stringIndex: number;
  color?: string;
  label?: string;
};

type FretboardProps = {
  frets?: number;
  markers?: FretboardMarker[];
  showStringLabels?: boolean;
  showFretNumbers?: boolean;
};

export const Fretboard = ({
  frets = 12,
  markers = [],
  showStringLabels = true,
  showFretNumbers = true,
}: FretboardProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleFrets = fretNumbers.slice(0, frets);
  const boardWidth = labelWidth + frets * fretWidth + 12;
  const boardHeight = fretNumberTop + 16;

  const viewBoxWidth = isMobile ? boardWidth : boardWidth;
  const viewBoxHeight = isMobile ? boardWidth - 150 : boardHeight;

  const getStringY = (stringIndex: number) => topPadding + stringIndex * stringGap;
  const getFretX = (fret: number) => labelWidth + fret * fretWidth;
  const getMarkerX = (fret: number) => labelWidth + (fret - 0.5) * fretWidth;

  return (
    <div className="w-full flex justify-center overflow-hidden px-4">
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        className="w-full max-w-2xl max-h-[55vh] md:max-h-none"
        role="img"
        aria-label="Six string guitar fretboard"
      >
        <g className="transition-transform duration-300 ease-in-out">
          {guitarStringNames.map((stringName, stringIndex) => {
            const y = getStringY(stringIndex);

            return (
              <g key={`${stringName}-${stringIndex}`}>
                {showStringLabels && (
                  <text x="6" y={y + 3} fontSize={10} dominantBaseline="central">
                    {stringName}
                  </text>
                )}
                <line
                  x1={labelWidth}
                  y1={y}
                  x2={getFretX(frets)}
                  y2={y}
                  stroke="grey"
                  strokeWidth={(stringIndex + 1) / 3}
                />
              </g>
            );
          })}

          <line
            x1={labelWidth}
            y1={topPadding - 6}
            x2={labelWidth}
            y2={getStringY(guitarStringNames.length - 1) + 6}
            stroke="black"
            strokeWidth="3"
          />

          {visibleFrets.map((fret) => (
            <g key={fret}>
              <line
                x1={getFretX(fret)}
                y1={topPadding - 6}
                x2={getFretX(fret)}
                y2={getStringY(guitarStringNames.length - 1) + 6}
                stroke="black"
                strokeWidth="1.5"
                onClick={() => console.log(fret)}
              />
              {showFretNumbers && (
                <text
                  x={getMarkerX(fret)}
                  y={fretNumberTop}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="fill-black"
                  fontSize={10}
                >
                  {fret}
                </text>
              )}
            </g>
          ))}

          {fretboardDots
            .filter((fret) => fret <= frets)
            .map((fret) => (
              <circle key={fret} cx={getMarkerX(fret)} cy={getStringY(2.5)} r="2.5" className="fill-neutral-300" />
            ))}

          {markers.map(({ fret, stringIndex, color = '#ef4444', label }, index) => (
            <g key={`${fret}-${stringIndex}-${index}`}>
              <circle cx={getMarkerX(fret)} cy={getStringY(stringIndex)} r="7" fill={color} />
              {label && (
                <text
                  x={getMarkerX(fret)}
                  y={getStringY(stringIndex) + 3}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="fill-white text-[8px] font-bold"
                >
                  {label}
                </text>
              )}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};
