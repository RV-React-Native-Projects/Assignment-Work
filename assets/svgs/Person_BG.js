import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={props.width || 240}
      height={props.height || 324}
      viewBox="0 0 240 324"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M114.34 135.723c5.215-3.972 18.308-5.759 23.874-1.934 5.498 3.842 6.097 10.054 8.659 15.768 2.417-1.14 6.408.493 7.109 2.737.869 1.058.908 4.031 1.508 5.453 26.079 4.153 30.038 24.493 33.177 47.585 4.153 23.432 13.58 46.813 9.488 70.925.533.772.953 1.523 1.342 2.414.932 1.585-.268 3.83-2.147 3.743-2.432-.214-4.84-.506-7.283-.597-6.773-.235-13.553-.207-20.328-.121l-.924.012c-34.148.425-68.294 1.263-102.443 1.486-1.24.001-1.846-1.11-1.68-2.207.333-2.207.642-4.416.965-6.624-8.078 2.134-16.664 2.671-24.719.224-.563-.574 1.313-.263 1.61-.35-7.412-5.067-5.198-15.742-4.542-23.43 4.083-26.345 5.523-55.494 21.298-77.975 6.824-9.174 16.83-16.438 28.327-18.072l.319-.044c3.361-.449 7.108-.593 10.047-2.422 3.306-2.641 4.715-7.519 8.193-7.564 1.148-.015 2.71 1.438 4.391 2.425.126-2.171 1.295-4.003 1.553-5.686l.021-.144c.27-1.962-.099-3.727 2.185-5.602zm56.047 70.305c-7.329-5.093-26.262-2.534-26.695-2.249-.954.628-1.365.684-1.881 1.499-.51.068-1.019.138-1.528.21-1.02.334-.264 1.589.915 1.141-.709 3.059 1.377 5.235 2.208 8.259.27.982.01 2.748 0 3.752.081 1.279 1.495 2.79 1.259 4.074-.838 4.562-5.384 9.013-3.467 13.438 1.269 2.5 5.088 3.774 7.627 4.624 5.261 2.019 14.426-.076 17.483-4.624 1.63-2.425 3.519-8.543 4.491-10.441l.215-3.01c.532-7.483 1.004-15.539-.627-16.673z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M104.912 144.288c.506-.448 1.255.115.934.721-.723 1.361-1.464 2.65-2.434 3.853-.588.73-1.218 1.42-1.856 2.102 1.638 1.417 3.043 3.177 4.369 4.827 1.697 2.109 3.3 4.308 5.205 6.238 1.878 1.904 3.954 3.235 6.465 4.122l.507.176c2.522.886 5.218 2.082 6.639 4.471.28.471-.284 1.053-.759.759-2.47-1.53-5.372-1.838-8.061-2.849-2.598-.976-4.862-2.479-6.863-4.398-1.997-1.915-3.674-4.094-5.424-6.227-1.73-2.109-3.592-3.911-5.638-5.695-3.158 2.125-6.762 3.05-10.427 3.958l-.4.099c-3.67.909-7.319 1.964-10.761 3.547-3.035 1.395-6.02 3.061-8.493 5.331-2.624 2.41-4.667 5.487-6.536 8.496-4.182 6.733-7.122 14.109-9.71 21.575a222.866 222.866 0 00-6.762 23.701 167.34 167.34 0 00-2.292 12.318 184.45 184.45 0 00-.793 5.987c-.247 2.136-.304 4.333-.959 6.386-.28.88-.944 1.246-1.607 1.214l-.135 1.687c-.179 2.248-.345 4.497-.402 6.759-.093 3.762-.05 7.513.22 11.266l.038.512c.213 2.74.688 5.818 2.747 7.824 2.132 2.077 5.412 2.731 8.286 2.768 6.695.087 13.139-3.077 19.063-5.853a206.05 206.05 0 0017.827-9.474 270.135 270.135 0 008.748-5.428 234.07 234.07 0 004.21-2.79c.798-.542 1.555-1.135 2.367-1.616-.398-.371-.576-.953-.242-1.462-2.349-2.04-3.326-5.678-3.44-8.623-.093-2.376.257-4.746.533-7.1.14-1.188.311-2.373.49-3.554.07-.467.124-.967.206-1.46a193.69 193.69 0 01-19.55 9.348 155.155 155.155 0 01-10.425 3.85l-.714.235c-3.336 1.093-6.753 2.125-10.202 2.749-.185.034-.335-.239-.138-.325 3.362-1.484 6.84-2.736 10.252-4.103l.56-.228a1.236 1.236 0 01-.2-.029c-2.001-.483-3.987-1.228-5.95-1.855-1.82-.582-3.867-.947-5.57-1.825-.131-.068-.058-.25.07-.259 1.914-.133 3.991.425 5.867.754l.705.123c1.18.208 2.388.432 3.563.724.042-.393.262-.789.575-1.021 3.443-2.551 3.094-7.702 3.462-11.501l.273-2.821c.48-4.936.988-9.872 1.76-14.771.041-.261.446-.186.448.061.04 6.073-.419 12.118-.649 18.181l-.035.995c-.127 3.742-.227 7.627-2.582 10.506.33-.193.775-.193 1.041.125.328.39.518.828.512 1.258a337.892 337.892 0 006.356-2.743c6.78-3.005 13.419-6.368 19.881-10.006.696-.392 1.357-.084 1.701.432l.049-.007a.211.211 0 01.026-.002l.049-.002h.005c.91-.5 2.149-.144 2.93.585.023.022.043.046.063.069a10.482 10.482 0 002.749-1.802c1.713-1.554 3.165-3.475 4.431-5.402 2.33-3.549 4.31-7.495 7.458-10.416 2.558-2.373 5.729-3.851 9.056-4.778a.331.331 0 01.09-.27c.171-.175.293-.236.514-.129.017.008.028.02.035.033l.324-.555c.178-.301.36-.605.423-.684.377-.476.766-.948 1.161-1.41.669-.783 1.431-1.555 2.314-2.098 1.933-1.188 3.966-.516 5.953.134 1.201.392 2.398.797 3.596 1.196l.124.04c.894.287 1.94.539 2.339 1.486.159.375.183.764.109 1.141 8.49-2.159 17.919-1.167 26.204 1.368.318.098.635.359.702.703.949 4.87 1.372 9.864.943 14.816-.371 4.276-1.318 8.465-3.102 12.379l-.102.221c-1.676 3.627-4.334 8.099-8.393 9.236-2.451.686-5.162.282-7.662.156-2.429-.123-4.912-.14-7.319-.522-2.143-.341-4.021-1.302-5.345-3.045-1.143-1.504-1.744-3.322-2.237-5.13-.226.072-.45.149-.67.235-.932.364-1.72.951-2.434 1.642-1.506 1.459-2.674 3.231-4.25 4.623-1.426 1.261-3.052 2.241-4.795 2.995-3.613 1.562-7.489 2.186-11.311 3.013l-.267.058c-2.877.632-5.813 1.407-8.353 2.906-.049.441-.25.856-.572 1.128.448.421.637 1.087.244 1.712-1.1 1.746-2.993 2.739-4.693 3.855l-.111.073a205.462 205.462 0 01-15.627 9.429c-5.757 3.147-11.638 6.115-17.625 8.807.36 1.769.228 3.592.498 5.373l.042.254c.115.661-.04 1.213-.496 1.645l-.048.044v-.006l-.042.04-.014.012.005-.004a1.527 1.527 0 01-.162.131l-.07.045c-.439.266-1.003.263-1.451.028l-.052-.028-.086-.049c-.593-.342-1.002-1.187-.756-1.858.605-1.65.833-3.412 1.391-5.073l-.442.198-.584.255c-6.312 2.73-13.324 5.03-20.202 3.168-3.038-.822-5.879-2.563-7.4-5.399-1.495-2.791-1.707-6.032-1.786-9.137a73.58 73.58 0 01.612-11.522c.34-2.55.75-5.148 1.382-7.672a1.904 1.904 0 01-.628-1.209c-.298-2.411.224-4.917.544-7.314.313-2.342.658-4.679 1.048-7.008a241.125 241.125 0 012.77-14.048c1.898-8.275 4.404-16.402 7.42-24.336l.265-.691c2.788-7.251 6.016-14.347 10.51-20.717 2.15-3.048 4.423-5.811 7.461-8.008 2.846-2.057 6.057-3.539 9.37-4.671 3.317-1.133 6.726-1.893 10.195-2.365 3.523-.48 7.242-.774 10.529-2.22-.416-.745-.06-1.752.64-2.215 2.355-1.556 4.533-3.581 6.643-5.452zm75.382 67.679c.099-.15.333-.055.29.122-1.146 4.694-2.221 9.398-2.923 14.181-1.267 8.634-1.034 17.38-.93 26.078l.005.449c.053 4.685.127 9.37.282 14.053.078 2.367.233 4.757.149 7.125-.046 1.285-.388 2.5-.51 3.769-.106 1.11-.011 2.236.042 3.348.035.739-1.055.707-1.129 0l-.095-.915c-.123-1.158-.275-2.309-.655-3.417-.456-1.333-.675-2.642-.833-4.042-.242-2.145-.35-4.311-.444-6.47l-.064-1.494c-.39-9.026-.377-18.094.256-27.11l.046-.644c.626-8.522 1.713-17.731 6.513-25.033zm-24.413-53.714c-.299-.123-.195-.575.137-.496l.602.143c4.415 1.058 8.749 2.204 12.869 4.172 4.123 1.97 7.613 4.91 10.387 8.525 5.392 7.028 7.632 15.569 9.401 24.101 1.965 9.482 3.755 18.998 5.738 28.476l.368 1.766c1.835 8.828 3.567 17.661 4.843 26.593l.092.648c1.287 9.186 2.061 18.689.657 27.899-.278 1.822-3.309 1.368-3.19-.432.342-5.204.587-10.381.35-15.596a165.304 165.304 0 00-1.455-15.582c-.614-4.352-1.528-8.65-2.338-12.967l-.127-.682c-.677-3.672-1.376-7.34-2.073-11.008l-1.042-5.493c-1.562-8.224-3.154-16.456-4.953-24.628l-.106-.481c-1.761-7.863-4.356-16.099-9.637-22.343-5.359-6.336-13.03-9.527-20.523-12.615zm-19.472 83.399c.129-.288.58-.256.718 0 .543 1.002.604 2.281.706 3.413l.011.116c.131 1.381.246 2.767.317 4.152.134 2.629.199 5.254.19 7.887a158.025 158.025 0 01-.208 8.086l-.039.721c-.133 2.341-.356 4.952-1.467 6.999-.405.744-1.504.525-1.738-.227-.767-2.464-.373-5.385-.176-7.908l.153-1.969c.151-1.969.295-3.938.409-5.91.157-2.697.286-5.396.411-8.094.04-.877.084-1.753.13-2.63l.071-1.314c.061-1.1.056-2.306.512-3.322zm-86.228 3.491l.339-.328c1.042-1.02 2.36-2.592 3.9-2.494.614.039 1.006.549.878 1.154-.272 1.292-1.59 1.963-2.539 2.752-1.04.864-2.019 1.788-2.996 2.721a58.173 58.173 0 00-2.516 2.555l-.305.33c-.292.318-2.37 2.199-2.145 2.687l.012.022c.063.093-.041.221-.145.189-.898-.284-.842-1.053-.502-1.833.651-1.498 1.793-2.884 2.79-4.163a35.072 35.072 0 013.229-3.592zm89.48-37.568c-.694-1.641-3.251-1.607-4.702-1.508-3.655.247-7.609 1.172-10.861 2.881-3.372 1.771-5.643 4.61-7.675 7.749l-.095.148c-1.981 3.08-3.888 6.726-6.99 8.843-1.579 1.079-3.424 2.065-5.341 2.491a.972.972 0 01-.624.481l-.13.03c-.546.121-1.394.254-2.126.174.005.359.001.715.01 1.054.026.974.037 1.951.037 2.925 0 2.04-.11 4.085-.024 6.125.075 1.805.33 3.691 1.196 5.304.635 1.184 1.474 1.967 2.486 2.715 2.49-1.518 5.306-2.444 8.163-3.14 3.456-.841 6.995-1.402 10.372-2.543 1.625-.55 3.188-1.268 4.604-2.245 1.503-1.036 2.651-2.439 3.832-3.811l.184-.213c1.205-1.383 2.521-2.706 4.224-3.456 1.467-.645 3.4-.76 4.683-1.76.67-.523.726-1.281.797-2.058-.821.117-1.691-.071-2.51-.167l-.424-.05c-.774-.092-1.53-.193-2.292-.39-.142-.037-.142-.25 0-.287.9-.232 1.793-.331 2.716-.44l.217-.027c.836-.109 1.714-.275 2.533-.091.147-.559.36-1.094.657-1.629.419-.752 1.21-1.604 1.317-2.482a1.444 1.444 0 00-.153-.804l-.043-.079a.664.664 0 00-.203-.245c-.01.012-.031.025-.077.039-.631.199-1.181-.11-1.473-.586-1.239.154-2.592.102-3.755.154l-1.175.057c-1.256.057-2.568.082-3.749-.171-.164-.036-.214-.31-.049-.381 1.451-.62 3.21-.818 4.764-1.057.867-.133 1.741-.235 2.611-.352.579-.078 1.194-.207 1.794-.238 1.505-1.874.694-4.831-1.4-5.638-.763.336-1.449.141-2.282.069a27.857 27.857 0 00-2.502-.116c-1.674.007-3.447.448-5.105.258-.27-.031-.52-.39-.252-.609 1.269-1.036 3.087-1.373 4.698-1.594l.334-.045c.54-.071 1.196-.174 1.877-.235.154-.301.431-.528.846-.585.123-.017.247-.026.371-.037l-.002-.012c1.013-.049.969-1.76.691-2.416zm-69.31 32.004a.893.893 0 01-.059.079l-.032.037.167-.067-.076-.049zm86.977-35.671c-4.262-.458-8.529-.361-12.803-.238-.342 1.118-1.532 2.071-2.684 2.107.902 1.375.996 3.236.362 4.694 1.345.535 2.503 1.497 3.206 2.867.975 1.898.847 4.011-.116 5.765.822.745 1.308 1.955 1.259 3.095-.054 1.271-.812 2.357-1.441 3.41-.68 1.138-.703 2.14-.912 3.415-.306 1.866-1.563 2.997-3.182 3.704l.086.339c.417 1.625.937 3.339 2.129 4.527 1.534 1.529 3.914 1.515 5.941 1.611l.098.005c1.856.093 3.712.202 5.567.307l1.392.078c2.136.117 4.188.131 5.932-1.281 2.847-2.307 4.799-6.123 6.034-9.502 2.594-7.092 2.625-14.875 1.434-22.262-3.992-1.287-8.134-2.193-12.302-2.641zm-35.438 11.767l.031.002c.878.1 1.48.811 1.695 1.654.312 1.225.159 2.333.909 3.439.772 1.138 1.246 2.049 1.358 3.454.047.578.025 1.155.154 1.721l.093.396c.099.423.181.83.131 1.284-.045.414-.246.737-.661.87-1.353.433-2.398-.565-2.747-1.826-.302-1.089.101-2.387-.325-3.41-.236-.567-.671-1.041-.917-1.612a5.265 5.265 0 01-.405-1.772c-.074-1.163.954-2.561.381-3.615-.123-.225.016-.592.303-.585zm-17.969-12.005c.916-.186 1.955-.613 2.859-.258.464.183.694.749.301 1.143-.681.683-1.671.721-2.588.882l-.081.014c-1.085.201-2.172.392-3.26.572-2.047.339-4.1.639-6.16.894a157.72 157.72 0 01-6.36.671l-.822.067c-1.794.144-3.661.252-5.422-.023-.255-.04-.214-.413 0-.478 1.93-.584 4.045-.74 6.039-.988 2.12-.263 4.236-.541 6.347-.87 2.107-.33 4.212-.683 6.308-1.074.948-.176 1.894-.36 2.839-.552zm33.054-1.875c-.804-.285-1.688-.706-2.559-.565-1.503.243-2.839 1.707-4.029 2.671l.598-.116c3.054-.587 7.1-1.22 9.664.723l.019-.033c.207-.315.447-.56.709-.829l.073-.073.141-.15-.323-.112c-.692-.245-1.512-.561-1.641-.607l-.009-.003c-.882-.299-1.765-.595-2.643-.906zm-25.099-64.055c-.126-1.617 2.391-1.604 2.515 0 .272 3.502-.516 6.971-2.211 10.042a1.345 1.345 0 01-.04.063 49.617 49.617 0 003.23 1.555 47.632 47.632 0 004.286 1.625c1.316.424 2.937.591 4.043 1.472 2.333 1.859 1.457 5.715 1.008 8.215l-.07.394c-.224 1.286-.385 2.606.157 3.841.579 1.318 1.749 2.296 2.794 3.24l.211.191c.925.843 1.982 1.868 2.66 3.011.62-1.281 1.464-2.328 2.357-3.507.637-.841.184-1.119-.274-1.94-.44-.791-.655-1.634-.518-2.537.254-1.666 1.586-2.869 2.911-3.774 1.565-1.067 3.311-1.858 4.929-2.851 3.324-2.041 6.561-4.374 9.478-6.965.08-.071.22.023.155.12-2.304 3.506-5.005 6.535-8.325 9.107-1.346 1.042-2.761 1.907-4.184 2.816l-.41.263c-.571.37-1.284.866-1.543 1.496-.26.634.295 1.113.593 1.639.948 1.668.491 3.225-.633 4.64l-.052.065c-1.117 1.377-1.963 2.657-2.368 4.416-.87 3.779.342 7.714 1.61 11.261l.05.14c.686 1.912 1.415 3.81 2.011 5.752l.164.537c.54 1.788.982 3.55.376 5.388-.206.625-1.058.773-1.412.184-1.248-2.074-1.559-4.57-2.342-6.85-.762-2.223-1.638-4.405-2.375-6.637-.948-2.873-1.583-5.966-1.239-8.98-.01-.018-.021-.034-.029-.053l-.242-.528c-.658-1.431-1.294-2.68-2.492-3.821-1.249-1.19-2.605-2.243-3.587-3.683-2.135-3.128-.815-6.608-.557-10.028l.029-.42c.047-.71.073-1.675-.391-2.167-.521-.553-1.745-.694-2.437-.939-1.788-.633-3.551-1.371-5.23-2.257-1.598-.843-3.146-1.775-4.587-2.866l-.73-.55c-1.153-.87-2.348-1.82-3.121-3.005-.089-.136.063-.356.224-.291 1.29.524 2.468 1.357 3.674 2.081.019-.044.041-.089.066-.133 1.492-2.703 2.106-5.698 1.868-8.772zm41.194 18.518c.513-1.41 2.855-1.301 2.762.374-.072 1.287-.618 2.448-1.117 3.616l-.054.125a23.147 23.147 0 01-1.823 3.476c-1.361 2.132-2.955 4.111-4.658 5.979-1.544 1.693-3.571 2.729-5.906 2.557-.984-.073-1.977-.323-2.839-.815-1.024-.584-2.136-2.338-3.443-1.913-.126.041-.244-.144-.135-.232 1.508-1.215 3.22.669 4.664 1.123 2.176.684 4.409-.072 5.81-1.832 1.462-1.837 2.808-3.894 4.036-5.895a28.424 28.424 0 001.686-3.156c.496-1.097.609-2.289 1.017-3.407zm-3.508-8.674c-.063-.195.179-.38.349-.269.992.645 1.85 1.498 2.764 2.246a138.81 138.81 0 003.074 2.442c1.512 1.166-.242 3.313-1.573 2.039-1.822-1.743-3.818-4.022-4.614-6.458zm-5.441-6.823c.403-1.553 2.784-.912 2.437.623l-.011.046c-.658 2.536.278 5.117 2.277 6.761l.073.06c1.265 1.012-.527 2.781-1.778 1.779-2.733-2.188-3.87-5.905-2.998-9.269z"
        fill="#E5E5E5"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M167.025 97.896c-.084-4.735-.177-9.564-.881-14.253-.688-4.584-2.58-8.727-5.832-12.055-6.907-7.07-16.919-8.798-26.238-10.38l-15.934-2.706c-4.861-.826-10.047-2.145-14.958-.974-2.42.577-4.475 1.916-6.354 3.502-1.81 1.528-3.757 3.169-4.984 5.225-1.229 2.058-1.651 4.465-2.051 6.793-.45 2.626-.8 5.271-1.05 7.923a99.294 99.294 0 00-.204 15.991 110.714 110.714 0 001.41 11.525c.067.372.117.785.185 1.202-.502 1.43-.788 2.91-.765 4.385.068 4.344 3.733 7.078 7.427 8.547 2.142.851 4.382 1.429 6.487 2.381 2.214 1 3.721 2.622 5.235 4.471 2.888 3.529 6.146 6.7 9.867 9.346 7.888 5.609 17.879 8.262 27.451 6.248 2.296-.483 4.613-1.233 6.677-2.364 2.18-1.193 3.818-2.923 5.195-4.967 2.555-3.796 4.387-8.071 5.774-12.421 1.414-4.437 2.418-8.882 2.965-13.509.545-4.611.66-9.27.578-13.91z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M116.179 42.009c6.593-.907 15.694 2.041 18.978 7.988 15.677-3.698 35.45-3.819 48.372 8.49 13.483 14.6-3.453 33.85-14.682 38.191.817 3.975-.457 29.44-9.477 40.798-7.159 9.624-23.83 14.066-31.544 2.571l-.06-.095c-.826-1.328-.114-1.285.734-.298 7.554 6.646 17.824 6.759 25.738-.254 14.833-12.818 13.304-44.248 6.246-62.43-20.098-2.21-41.617 3.885-55.498 19.02l.939 5.653c.159.963.341 1.925.48 2.891.089.62.098 1.236-.33 1.737-1.417 1.655-3.803-.832-5.767-1.821a8.251 8.251 0 00-1.73-.073c-9.435 1.216-7.576 19.525 2.794 16.316.871-.543 1.619-.378 1.957.41 2.472 2.265 4.102 6.304 8.208 10.195 1.449 1.459 2.767 2.68 4.397 3.851.957.968 3.846 1.956 2.93 3.613-1.731 3.771-11.942-8.074-13.747-11.35-5.657 2.234-11.925 1.476-17.787.929-30.923-1.608-26.795-34.217-1.448-54.805 4.772-3.514 10.036-6.38 15.508-8.586.747-.302.421-1.529-.337-1.223a75.653 75.653 0 00-10.515 5.208l-.005-1.202c-.005-2.025.027-4.133.378-5.984.176-1.282.472-2.651.927-3.681.562-3.158 9.375-13.999 24.341-16.06zM98.165 108.58c.477-.454 1.369.087 1.794.073 1.087.149 2.12.608 2.925 1.175.532.298.904.578 1.216.835l.008-.002-.008.003.03.02c.453.322 2.113 2.138 1.064 1.649a8.771 8.771 0 00-.239-.295.176.176 0 01-.035.039l.059.087c.892 1.342-.647-.072-.884-.447-.011.009-.024.015-.036.022l.308.375.105.132.065.063c1.031 1.013 1.063 1.925-.135.427a.484.484 0 01.091.212l.071.09c.94 1.212.175.782-.292.264l-.039-.044.008.012c.434.669-.428.199-.58-.159l-.007-.016c-.166-.136-.268-.288-.303-.326l-.006-.006c-.809-.829-1.98-1.53-2.976-1.848a5.274 5.274 0 00-.437-.066 13.231 13.231 0 00-1.815-.274c-.075-.009-.151-.064-.208-.135-.924-.031-.639-.41-.255-.481l.007-.001-.077-.006c-.593-.058-.998-.271-.398-.402l.076-.015a.767.767 0 01-.026-.044c-.514-.056-.178-.556.107-.435-.12-.392.428-.196.497-.255.052-.058.117-.109.154-.112.165-.116.085-.106.171-.109zm3.144-6.355l-.12.071a1.057 1.057 0 01-.298.116c.142.061.282.126.421.196a10.927 10.927 0 01-.004-.256l.001-.127z"
        fill="#E5E5E5"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M143.152 128.274a8.595 8.595 0 01-3.614-2.781c-.322-.43-.406-.883-.338-1.298.076-.466.352-.889.728-1.172.377-.284.849-.425 1.305-.353.396.062.791.279 1.103.729l.065.09a5.701 5.701 0 002.087 1.752c.788.38 1.669.557 2.582.454 1.737-.196 2.935-1.136 4.208-2.413.157-.161.315-.327.474-.496a.742.742 0 01.393-.303.842.842 0 01.543.008.85.85 0 01.427.324c.098.143.153.32.135.524-.116 1.322-.808 2.503-1.79 3.43-1.09 1.03-2.536 1.742-3.897 1.992-1.5.275-3.028.078-4.411-.487zm5.118-20.408c1.596.97 4.026 3.232 2.31 5.637-2.02 2.121-4.929-.31-6.362-1.41-1.329-.852-2.822 1.34-1.589 2.335 10.357 7.671 14.56-6.308 6.448-7.702-.893-.154-1.225.84-.807 1.14zm-18.56-8.923c.176-2.189 3.509-2.686 3.84-.52.297 1.94-.053 3.722-.926 5.469-.835 1.669-2.933.891-3.092-.629-.212-2.037.068-2.959.178-4.32zm25.366-.97c.464-.608 1.135-1.023 1.939-.788 2.511.733 1.771 4.3.889 6.035-.479.943-2.028 1.182-2.728.352-1.141-1.353-1.687-4.056-.237-5.39.039-.068.083-.138.137-.208zm-22.487-8.608l.396-.07c1.227-.211 2.753-.415 3.621.572.46.523.619 1.495 0 1.996-1.089.882-2.292.54-3.596.615-1.075.061-2.108.24-3.144.535-2.271.65-4.122 1.836-6.062 3.138-.255.17-.515-.155-.393-.394 1.12-2.194 3.29-3.997 5.464-5.095 1.16-.587 2.43-1.074 3.714-1.297zm20.198-.983l.303.063c3.304.69 7.596 2.07 9.161 5.317.059.459-.004.557-.055.621l-.017.022c-.042.055-.076.13-.275.193a7.552 7.552 0 01-.167-.042c-.717-.188-1.284-.447-1.834-.716l-.595-.294c-.691-.338-1.388-.665-2.127-.906a25.04 25.04 0 00-4.845-1.07 1.99 1.99 0 01-.972-.37 1.463 1.463 0 01-.543-.828c-.116-.466-.083-.82.167-1.241.189-.316.458-.536.768-.662a1.799 1.799 0 011.031-.087z"
        fill="#E5E5E5"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M169.07 112.228c-.7-.94-1.959-2.175-3.232-2.108-.163.008-.224.185-.126.304.417.509.986.871 1.403 1.39.494.615.85 1.356 1.082 2.106.336 1.089.429 2.321.129 3.429-.529 1.952-2.201 3.383-4.026 4.113-1.807.723-3.98.97-5.688-.089-2.522-1.565-4.661-3.82-7.83-3.864-.741-.011-1.264.329-1.575.814-.313-.468-.828-.798-1.551-.807-3.553-.04-6.205 2.407-9.187 3.932-2.015 1.031-4.623.711-6.702.03-1.961-.642-4.09-1.932-4.83-3.969-.408-1.125-.317-2.438.102-3.547a6.298 6.298 0 011.229-2.006c.546-.594 1.264-.968 1.823-1.532.114-.115.024-.294-.126-.304-2.376-.161-4.521 2.677-4.97 4.736-.442 2.027.217 4.05 1.55 5.597 2.712 3.146 7.732 4.183 11.639 3.259 3.162-.748 6.166-2.471 9.472-2.224.724.054 1.245-.248 1.559-.706.314.472.837.78 1.567.709 3.081-.298 5.831 1.885 8.822 2.418 2.381.424 4.953-.148 6.994-1.432 2.133-1.341 3.634-3.493 3.733-6.058.057-1.476-.376-3.003-1.261-4.191z"
        fill="#E5E5E5"
      />
    </Svg>
  );
}

export default SvgComponent;