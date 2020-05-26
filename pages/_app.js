import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <style jsx global>
        {`
          /* m-plus-rounded-1c-regular - latin_japanese */
          @font-face {
            font-family: "M PLUS Rounded 1c";
            font-style: normal;
            font-weight: 400;
            src: url("../fonts/m-plus-rounded-1c-v10-latin_japanese-regular.eot"); /* IE9 Compat Modes */
            src: local("M PLUS Rounded 1c"), local("MPLUSRounded1c-Regular"),
              url("../fonts/m-plus-rounded-1c-v10-latin_japanese-regular.eot?#iefix")
                format("embedded-opentype"),
              /* IE6-IE8 */
                url("../fonts/m-plus-rounded-1c-v10-latin_japanese-regular.woff2")
                format("woff2"),
              /* Super Modern Browsers */
                url("../fonts/m-plus-rounded-1c-v10-latin_japanese-regular.woff")
                format("woff"),
              /* Modern Browsers */
                url("../fonts/m-plus-rounded-1c-v10-latin_japanese-regular.ttf")
                format("truetype"),
              /* Safari, Android, iOS */
                url("../fonts/m-plus-rounded-1c-v10-latin_japanese-regular.svg#MPLUSRounded1c")
                format("svg"); /* Legacy iOS */
          }
        `}
      </style>
    </div>
  );
}

export default MyApp;
