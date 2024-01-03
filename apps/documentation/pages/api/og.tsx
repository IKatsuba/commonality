/* eslint-env node */
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

const font = fetch(new URL('./Vollkorn-SemiBold.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer(),
);

export default async function (req) {
  const inter = await font;

  const { searchParams } = new URL(req.url);

  // ?title=<title>
  const hasTitle = searchParams.has('title');
  const title = hasTitle
    ? searchParams.get('title')?.slice(0, 100)
    : 'Commonality Documentation';

  return new ImageResponse(
    (
      <div
        style={{
          padding: 20,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#171717',
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: 60,
            paddingBottom: 60,
            paddingRight: 50,
            paddingLeft: 50,
            border: 'solid 1px white',
            backgroundColor: '#171717',
            fontWeight: 600,
            color: 'white',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="306"
            height="40"
            fill="none"
            style={{ position: 'absolute', top: 50, left: 50 }}
          >
            <g fill="white">
              <path
                fillRule="evenodd"
                d="M15.253 2.983c.338.38-.122.903-.607.749A8.727 8.727 0 0 0 3.681 14.697c.154.485-.369.944-.749.607a8.727 8.727 0 1 1 12.32-12.32ZM12 20.779a8.727 8.727 0 0 0 8.319-11.374c-.154-.485.368-.944.749-.606a8.727 8.727 0 1 1-12.32 12.32c-.339-.38.12-.903.605-.749A8.722 8.722 0 0 0 12 20.78Z"
                clipRule="evenodd"
              />
              <path d="M43.05 17.077c-.45.55-1.033.975-1.75 1.275-.717.283-1.542.425-2.475.425-1.133 0-2.15-.217-3.05-.65a5.092 5.092 0 0 1-2.125-1.95c-.517-.867-.775-1.967-.775-3.3 0-1 .217-1.959.65-2.875a5.58 5.58 0 0 1 1.925-2.25c.867-.584 1.933-.875 3.2-.875.9 0 1.683.091 2.35.275a5.802 5.802 0 0 1 1.825.775c-.1.466-.167.95-.2 1.45-.033.483-.05 1.025-.05 1.625-.267.116-.575.2-.925.25a7.08 7.08 0 0 1-1 .075c-.05-.967-.258-1.7-.625-2.2-.35-.5-.817-.75-1.4-.75-.7 0-1.242.375-1.625 1.125s-.575 1.758-.575 3.025c0 .716.117 1.416.35 2.1.25.666.625 1.216 1.125 1.65.5.416 1.142.625 1.925.625.533 0 1.017-.084 1.45-.25.45-.184.842-.434 1.175-.75.15.133.275.3.375.5.117.2.192.425.225.675Zm7.67 1.7c-1.316 0-2.441-.234-3.374-.7-.934-.484-1.642-1.159-2.125-2.025-.467-.884-.7-1.917-.7-3.1 0-1.284.274-2.375.825-3.275a5.3 5.3 0 0 1 2.25-2.075c.966-.484 2.041-.725 3.225-.725 1.366 0 2.508.25 3.425.75.933.5 1.633 1.191 2.1 2.075.483.866.725 1.875.725 3.025 0 1.216-.259 2.283-.776 3.2-.516.9-1.25 1.6-2.2 2.1-.95.5-2.075.75-3.374.75Zm.325-1.575c.784 0 1.367-.367 1.75-1.1.4-.75.6-1.684.6-2.8 0-1.067-.133-1.967-.4-2.7-.266-.734-.616-1.284-1.05-1.65-.433-.367-.908-.55-1.425-.55-.783 0-1.366.366-1.75 1.1-.383.716-.575 1.616-.575 2.7 0 .966.109 1.833.325 2.6.234.75.567 1.341 1 1.775a2.13 2.13 0 0 0 1.525.625Zm7.635 1.425c0-.3.008-.575.025-.825.033-.267.092-.5.175-.7.683-.034 1.125-.192 1.325-.475.217-.3.325-.867.325-1.7v-3.575c0-.55-.042-.975-.125-1.275-.067-.317-.233-.542-.5-.675-.25-.15-.65-.242-1.2-.275 0-.234.017-.467.05-.7.05-.25.133-.492.25-.725.5 0 1.025-.034 1.575-.1a17.728 17.728 0 0 0 1.575-.3c.5-.134.892-.275 1.175-.425.2.066.367.208.5.425.133.2.2.5.2.9 0 .283-.033.6-.1.95-.05.35-.158.891-.325 1.625h-.2c.3-.767.525-1.3.675-1.6.167-.317.317-.542.45-.675.35-.4.825-.767 1.425-1.1.6-.334 1.283-.5 2.05-.5.783 0 1.475.166 2.075.5a3.095 3.095 0 0 1 1.375 1.5c.183.333.275.691.275 1.075h-.1c.25-.667.533-1.159.85-1.475.333-.367.775-.7 1.325-1 .567-.3 1.217-.45 1.95-.45.817 0 1.517.141 2.1.425.583.266 1.033.708 1.35 1.325.333.616.5 1.441.5 2.475v3.025c0 .783.033 1.375.1 1.775.083.383.217.641.4.775.183.133.45.216.8.25.067.216.108.45.125.7.033.25.05.525.05.825a27.36 27.36 0 0 0-1.425-.075H76.83a32.7 32.7 0 0 1-1.25.025c-.4.016-.75.033-1.05.05 0-.334.008-.617.025-.85.033-.234.083-.459.15-.675.35-.034.633-.117.85-.25.217-.15.367-.417.45-.8.1-.384.15-.925.15-1.625v-2.4c0-1.084-.167-1.817-.5-2.2-.317-.384-.742-.575-1.275-.575-.45 0-.867.15-1.25.45-.383.3-.683.75-.9 1.35-.217.583-.325 1.325-.325 2.225v1.575c0 .85.1 1.433.3 1.75.217.3.608.466 1.175.5.067.183.117.408.15.675.033.266.05.55.05.85-.4-.034-.917-.059-1.55-.075h-3.725c-.617.016-1.15.041-1.6.075 0-.3.008-.584.025-.85.033-.267.083-.492.15-.675.4-.034.708-.117.925-.25.217-.134.367-.4.45-.8.083-.4.125-.984.125-1.75v-2.475c0-1-.167-1.684-.5-2.05-.317-.384-.775-.575-1.375-.575-.417 0-.817.158-1.2.475-.367.316-.667.775-.9 1.375-.217.6-.325 1.325-.325 2.175v1.625c0 .866.1 1.45.3 1.75.2.3.592.466 1.175.5.067.2.108.433.125.7.033.25.05.525.05.825a12.73 12.73 0 0 0-1.05-.075h-5.025c-.4.016-.725.041-.975.075Zm24.17 0c0-.3.008-.575.025-.825.033-.267.092-.5.175-.7.683-.034 1.125-.192 1.325-.475.217-.3.325-.867.325-1.7v-3.575c0-.55-.042-.975-.125-1.275-.067-.317-.233-.542-.5-.675-.25-.15-.65-.242-1.2-.275 0-.234.017-.467.05-.7.05-.25.133-.492.25-.725.5 0 1.025-.034 1.575-.1a17.714 17.714 0 0 0 1.575-.3c.5-.134.892-.275 1.175-.425.2.066.367.208.5.425.133.2.2.5.2.9 0 .283-.033.6-.1.95-.05.35-.158.891-.325 1.625h-.2c.3-.767.525-1.3.675-1.6.167-.317.317-.542.45-.675.35-.4.825-.767 1.425-1.1.6-.334 1.283-.5 2.05-.5.783 0 1.475.166 2.075.5a3.095 3.095 0 0 1 1.375 1.5c.183.333.275.691.275 1.075h-.1c.25-.667.533-1.159.85-1.475.333-.367.775-.7 1.325-1 .567-.3 1.217-.45 1.95-.45.817 0 1.517.141 2.1.425.583.266 1.033.708 1.35 1.325.333.616.5 1.441.5 2.475v3.025c0 .783.033 1.375.1 1.775.083.383.217.641.4.775.183.133.45.216.8.25.067.216.108.45.125.7.033.25.05.525.05.825a27.36 27.36 0 0 0-1.425-.075H101c-.433.016-.85.025-1.25.025-.4.016-.75.033-1.05.05 0-.334.008-.617.025-.85.033-.234.083-.459.15-.675.35-.034.633-.117.85-.25.217-.15.367-.417.45-.8.1-.384.15-.925.15-1.625v-2.4c0-1.084-.167-1.817-.5-2.2-.317-.384-.742-.575-1.275-.575-.45 0-.867.15-1.25.45-.383.3-.683.75-.9 1.35-.217.583-.325 1.325-.325 2.225v1.575c0 .85.1 1.433.3 1.75.217.3.608.466 1.175.5.067.183.117.408.15.675.033.266.05.55.05.85-.4-.034-.917-.059-1.55-.075h-3.725c-.617.016-1.15.041-1.6.075 0-.3.008-.584.025-.85.033-.267.083-.492.15-.675.4-.034.708-.117.925-.25.217-.134.367-.4.45-.8.083-.4.125-.984.125-1.75v-2.475c0-1-.167-1.684-.5-2.05-.317-.384-.775-.575-1.375-.575-.417 0-.817.158-1.2.475-.367.316-.667.775-.9 1.375-.217.6-.325 1.325-.325 2.175v1.625c0 .866.1 1.45.3 1.75.2.3.592.466 1.175.5.067.2.108.433.125.7.033.25.05.525.05.825a12.73 12.73 0 0 0-1.05-.075h-5.025c-.4.016-.725.041-.975.075Zm30.004.15c-1.316 0-2.441-.234-3.375-.7-.933-.484-1.641-1.159-2.125-2.025-.466-.884-.7-1.917-.7-3.1 0-1.284.275-2.375.825-3.275a5.3 5.3 0 0 1 2.25-2.075c.967-.484 2.042-.725 3.225-.725 1.367 0 2.509.25 3.425.75.934.5 1.634 1.191 2.1 2.075.484.866.725 1.875.725 3.025 0 1.216-.258 2.283-.775 3.2-.516.9-1.25 1.6-2.2 2.1-.95.5-2.075.75-3.375.75Zm.325-1.575c.784 0 1.367-.367 1.75-1.1.4-.75.6-1.684.6-2.8 0-1.067-.133-1.967-.4-2.7-.266-.734-.616-1.284-1.05-1.65-.433-.367-.908-.55-1.425-.55-.783 0-1.366.366-1.75 1.1-.383.716-.575 1.616-.575 2.7 0 .966.109 1.833.325 2.6.234.75.567 1.341 1 1.775.434.416.942.625 1.525.625Zm9.485-3.875v-2.175c0-.484-.042-.859-.125-1.125a.901.901 0 0 0-.5-.625c-.25-.15-.65-.242-1.2-.275 0-.25.017-.492.05-.725.05-.25.133-.484.25-.7.883 0 1.733-.084 2.55-.25.833-.184 1.442-.375 1.825-.575a.935.935 0 0 1 .525.45c.133.2.2.5.2.9l-3.575 5.1Zm11.5 1.6c0 .833.092 1.408.275 1.725.2.3.525.45.975.45.083.2.133.425.15.675.033.233.05.516.05.85a87.173 87.173 0 0 0-1.425-.05 56.883 56.883 0 0 0-1.675-.025h-1.25c-.45.016-.883.025-1.3.025-.417.016-.75.033-1 .05 0-.3.008-.575.025-.825a2.4 2.4 0 0 1 .15-.7c.467 0 .825-.167 1.075-.5.25-.334.375-.942.375-1.825v-2.725c0-1.05-.167-1.775-.5-2.175-.333-.417-.808-.625-1.425-.625-.4 0-.792.158-1.175.475-.367.3-.667.75-.9 1.35-.233.583-.35 1.316-.35 2.2v1.65c0 .85.108 1.425.325 1.725.233.3.6.45 1.1.45.1.233.158.466.175.7.017.233.025.508.025.825-.233-.017-.55-.034-.95-.05-.4 0-.817-.009-1.25-.025H123.189c-.467.016-.917.025-1.35.025-.433.016-.775.033-1.025.05 0-.317.017-.609.05-.875a2.65 2.65 0 0 1 .15-.65c.65 0 1.083-.15 1.3-.45.233-.317.35-.892.35-1.725v-3.775l3.575-2.925c0 .2-.025.433-.075.7-.033.25-.092.516-.175.8l.3-.6c.1-.2.233-.392.4-.575.333-.384.8-.734 1.4-1.05.6-.334 1.292-.5 2.075-.5.7 0 1.35.133 1.95.4a3.18 3.18 0 0 1 1.475 1.3c.383.6.575 1.391.575 2.375v3.85Zm11.379 3.85c-.283-.117-.483-.284-.6-.5-.116-.234-.175-.55-.175-.95 0-.2.017-.434.05-.7.034-.284.092-.55.175-.8l.075-.075a4.762 4.762 0 0 1-.5 1.2c-.216.35-.475.641-.775.875-.333.3-.741.525-1.225.675-.466.15-1.025.225-1.675.225-1.116 0-1.983-.242-2.6-.725-.616-.484-.925-1.175-.925-2.075 0-.634.142-1.175.425-1.625.3-.467.7-.859 1.2-1.175a7.368 7.368 0 0 1 1.675-.775c.617-.2 1.242-.359 1.875-.475.65-.117 1.259-.217 1.825-.3 0-.484-.016-.884-.05-1.2a2.664 2.664 0 0 0-.15-.825 1.354 1.354 0 0 0-.35-.6 1.374 1.374 0 0 0-.65-.475c-.233-.1-.483-.15-.75-.15-.466 0-.841.141-1.125.425-.266.266-.466.616-.6 1.05a6.057 6.057 0 0 0-.25 1.325c-.4 0-.775-.017-1.125-.05-.35-.034-.658-.1-.925-.2.034-.45.042-.934.025-1.45a9.732 9.732 0 0 0-.175-1.55c.7-.317 1.5-.567 2.4-.75a13.17 13.17 0 0 1 2.575-.275c.95 0 1.717.116 2.3.35.584.216 1.025.475 1.325.775.35.366.617.866.8 1.5.2.616.3 1.508.3 2.675v2.175c0 .533.034.95.1 1.25.067.283.2.483.4.6.217.116.542.183.975.2.034.266.034.541 0 .825a2.288 2.288 0 0 1-.225.75c-.6.016-1.225.1-1.875.25a8.518 8.518 0 0 0-1.775.575Zm-3.4-2.125c.334 0 .675-.109 1.025-.325.35-.234.634-.575.85-1.025.234-.45.35-1.025.35-1.725v-.675c-.483.083-.941.183-1.375.3a4.751 4.751 0 0 0-1.1.45c-.3.166-.533.383-.7.65-.166.25-.25.566-.25.95 0 .5.117.858.35 1.075.25.216.534.325.85.325Zm8.648 1.975c0-.3.008-.575.025-.825.033-.267.083-.5.15-.7.666-.017 1.108-.175 1.325-.475.233-.3.35-.867.35-1.7v-10.4c0-.367-.05-.659-.15-.875-.1-.234-.284-.409-.55-.525-.267-.134-.659-.217-1.175-.25 0-.25.016-.492.05-.725.05-.25.125-.484.225-.7.566 0 1.141-.042 1.725-.125a16.88 16.88 0 0 0 1.625-.3c.483-.134.841-.267 1.075-.4.216.083.391.233.525.45.133.2.2.491.2.875v12.975c0 .833.108 1.4.325 1.7.216.3.633.458 1.25.475.066.2.108.441.125.725.016.266.025.533.025.8-.234-.017-.55-.034-.95-.05-.384 0-.8-.009-1.25-.025h-2.725c-.467.016-.892.025-1.275.025-.384.016-.692.033-.925.05Zm8.646 0c0-.3.008-.575.025-.825.033-.267.083-.5.15-.7.667-.017 1.108-.175 1.325-.475.233-.3.35-.867.35-1.7v-4.025c0-.4-.042-.725-.125-.975-.083-.25-.258-.434-.525-.55-.267-.134-.667-.217-1.2-.25 0-.25.017-.492.05-.725.033-.25.108-.484.225-.7.55 0 1.117-.042 1.7-.125.6-.084 1.142-.184 1.625-.3.5-.134.867-.267 1.1-.4.217.083.392.233.525.45.133.2.2.491.2.875v6.725c0 .833.108 1.4.325 1.7.217.3.625.458 1.225.475.067.2.108.441.125.725.033.266.05.533.05.8-.25-.017-.567-.034-.95-.05-.383 0-.8-.009-1.25-.025h-2.725c-.467.016-.892.025-1.275.025-.383.016-.7.033-.95.05Zm3.325-13.725c-.6 0-1.092-.159-1.475-.475-.367-.334-.55-.759-.55-1.275 0-.6.208-1.067.625-1.4.417-.334.917-.5 1.5-.5.683 0 1.208.166 1.575.5.367.333.55.791.55 1.375 0 .5-.2.925-.6 1.275-.4.333-.942.5-1.625.5Zm10.263 13.875c-1.15 0-2.016-.3-2.6-.9-.583-.6-.875-1.609-.875-3.025V9.227a4.611 4.611 0 0 0-.825-.225 7.892 7.892 0 0 0-1.025-.1c0-.3.017-.567.05-.8a4 4 0 0 1 .25-.75h1.55V4.277a7.149 7.149 0 0 0 1.625-.45c.534-.234.975-.492 1.325-.775.234.1.392.241.475.425.084.183.125.55.125 1.1v2.775h3.075c0 .3-.016.583-.05.85-.033.25-.091.491-.175.725-.566 0-1.083.033-1.55.1-.466.066-.9.158-1.3.275v5.125c0 .666.042 1.191.125 1.575.1.366.25.625.45.775.2.15.442.225.725.225.284 0 .55-.034.8-.1.267-.084.517-.192.75-.325.234.3.359.708.375 1.225-.333.283-.808.516-1.425.7-.6.183-1.225.275-1.875.275Zm13.575-7.675c.383-.917.491-1.542.325-1.875-.15-.334-.525-.55-1.125-.65a6.554 6.554 0 0 1-.175-.725 6.521 6.521 0 0 1-.05-.825l1.225.05a33.169 33.169 0 0 0 2.55 0l1.15-.05c0 .233-.017.491-.05.775a2.303 2.303 0 0 1-.175.775 1.923 1.923 0 0 0-.725.325c-.184.133-.359.341-.525.625-.167.283-.359.683-.575 1.2l-3.675 8.75c-.467 1.133-.9 2.05-1.3 2.75-.384.7-.759 1.233-1.125 1.6-.35.366-.709.616-1.075.75-.35.133-.725.2-1.125.2-.534 0-1.017-.1-1.45-.3-.417-.2-.734-.425-.95-.675-.05-.3-.059-.675-.025-1.125.033-.45.108-.834.225-1.15.283.083.616.15 1 .2.4.066.825.1 1.275.1.533 0 .983-.092 1.35-.275.383-.184.716-.509 1-.975.166-.25.458-.834.875-1.75.433-.917.908-2.042 1.425-3.375l1.725-4.35Zm-3.3 8.475c-.4-.95-.842-1.95-1.325-3-.467-1.05-.925-2.067-1.375-3.05-.45-1-.867-1.884-1.25-2.65-.284-.634-.534-1.1-.75-1.4-.217-.3-.425-.517-.625-.65a1.574 1.574 0 0 0-.675-.25 3.63 3.63 0 0 1-.15-.725 6.92 6.92 0 0 1-.05-.825c.483.016 1.016.033 1.6.05.6.016 1.183.025 1.75.025.6 0 1.258-.009 1.975-.025.716-.017 1.333-.034 1.85-.05 0 .283-.025.566-.075.85a3.25 3.25 0 0 1-.15.7c-.767.116-1.2.325-1.3.625-.084.3.075.858.475 1.675.233.466.483 1 .75 1.6.266.6.516 1.208.75 1.825.25.616.475 1.225.675 1.825l-2.1 3.45Z" />
            </g>
          </svg>
          <p
            style={{
              position: 'absolute',
              bottom: 50,
              left: 50,
              margin: 0,
              fontSize: 30,
              letterSpacing: -1,
            }}
          >
            Build bigger with the tools you already love
          </p>
          <h1
            style={{
              fontSize: 82,
              margin: '0 0 40px -2px',
              lineHeight: 1.1,
              textShadow: '0 2px 30px #000',
              letterSpacing: -4,
              color: 'white',
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'inter',
          data: inter,
          style: 'normal',
        },
      ],
    },
  );
}