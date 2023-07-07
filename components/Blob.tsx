export default function Blob() {
  return (
    <div class="blob absolute w-[500px] h[500px]">
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        id="blobSvg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: rgb(48, 197, 210);"></stop>
            <stop offset="100%" style="stop-color: rgb(181, 123, 238);"></stop>
          </linearGradient>
        </defs>
        <path class="blob" fill="url(#gradient)">
          <animate
            attributeName="d"
            dur="15000ms"
            repeatCount="indefinite"
            values="
            M405,296Q393,342,361,382Q329,422,272.5,455.5Q216,489,179,431.5Q142,374,102,339.5Q62,305,77,254.5Q92,204,107,153Q122,102,170,64.5Q218,27,260.5,80.5Q303,134,363.5,136Q424,138,420.5,194Q417,250,405,296Z;

            M403,292Q381,334,344.5,355.5Q308,377,268,388.5Q228,400,171.5,403Q115,406,90,355Q65,304,61,248.5Q57,193,78.5,135Q100,77,165,94.5Q230,112,270,115.5Q310,119,368,128Q426,137,425.5,193.5Q425,250,403,292Z;

            M405,289Q372,328,359.5,395Q347,462,282,471.5Q217,481,171.5,437.5Q126,394,72,356Q18,318,25.5,252Q33,186,75.5,142Q118,98,169,69Q220,40,263,84Q306,128,354,140.5Q402,153,420,201.5Q438,250,405,289Z;

            M416.5,308.5Q432,367,391.5,419Q351,471,290.5,429Q230,387,165,405.5Q100,424,111,355.5Q122,287,79.5,237Q37,187,81,146.5Q125,106,177.5,109Q230,112,280.5,93Q331,74,363.5,115Q396,156,398.5,203Q401,250,416.5,308.5Z;

            M405,296Q393,342,361,382Q329,422,272.5,455.5Q216,489,179,431.5Q142,374,102,339.5Q62,305,77,254.5Q92,204,107,153Q122,102,170,64.5Q218,27,260.5,80.5Q303,134,363.5,136Q424,138,420.5,194Q417,250,405,296Z;
            "
          >
          </animate>
        </path>
        <path class="blob" fill="url(#gradient)" style="filter: blur(30px);">
          <animate
            attributeName="d"
            dur="15000ms"
            repeatCount="indefinite"
            values="
            M405,296Q393,342,361,382Q329,422,272.5,455.5Q216,489,179,431.5Q142,374,102,339.5Q62,305,77,254.5Q92,204,107,153Q122,102,170,64.5Q218,27,260.5,80.5Q303,134,363.5,136Q424,138,420.5,194Q417,250,405,296Z;

            M403,292Q381,334,344.5,355.5Q308,377,268,388.5Q228,400,171.5,403Q115,406,90,355Q65,304,61,248.5Q57,193,78.5,135Q100,77,165,94.5Q230,112,270,115.5Q310,119,368,128Q426,137,425.5,193.5Q425,250,403,292Z;

            M405,289Q372,328,359.5,395Q347,462,282,471.5Q217,481,171.5,437.5Q126,394,72,356Q18,318,25.5,252Q33,186,75.5,142Q118,98,169,69Q220,40,263,84Q306,128,354,140.5Q402,153,420,201.5Q438,250,405,289Z;

            M416.5,308.5Q432,367,391.5,419Q351,471,290.5,429Q230,387,165,405.5Q100,424,111,355.5Q122,287,79.5,237Q37,187,81,146.5Q125,106,177.5,109Q230,112,280.5,93Q331,74,363.5,115Q396,156,398.5,203Q401,250,416.5,308.5Z;

            M405,296Q393,342,361,382Q329,422,272.5,455.5Q216,489,179,431.5Q142,374,102,339.5Q62,305,77,254.5Q92,204,107,153Q122,102,170,64.5Q218,27,260.5,80.5Q303,134,363.5,136Q424,138,420.5,194Q417,250,405,296Z;
            "
          >
          </animate>
        </path>
      </svg>
    </div>
  );
}
