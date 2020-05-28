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
              url("../fonts/m-plus-rounded-1c-v10-latin_japanese-regular.woff")
                format("woff");
          }
        `}
      </style>
    </div>
  );
}

export default MyApp;
