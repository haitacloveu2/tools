import React, { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { DocumentTitle } from '@wcj/tools-react-components';
import Layout from './app/Layout';
import { NoMatch } from './app/NoMatch';
import { Loading } from './app/Loading';

interface LoadableProps {
  title?: string;
}

const Loadable =
  (Component: React.LazyExoticComponent<() => JSX.Element>) =>
  ({ title, ...props }: LoadableProps) => {
    return (
      <DocumentTitle title={title}>
        <Suspense fallback={<Loading />}>
          <Component />
        </Suspense>
      </DocumentTitle>
    );
  };

// @ts-ignore
const HomePage = Loadable(lazy(() => import('./app/Home')));
// @ts-ignore
const UrlEncode = Loadable(lazy(() => import('@wcj/tools-react-url-encode')));
const TextCase = Loadable(lazy(() => import('@wcj/tools-react-text-case')));
const JSONFormat = Loadable(lazy(() => import('@wcj/tools-react-json-format')));
const ImageToBase64 = Loadable(lazy(() => import('@wcj/tools-react-image-to-base64')));

const Hash = Loadable(lazy(() => import('@wcj/tools-react-hash')));
const GeneratePassword = Loadable(lazy(() => import('@wcj/tools-react-generate-password')));
const HtmlToMarkdown = Loadable(lazy(() => import('@wcj/tools-react-html-to-markdown')));
const MarkdownToHtml = Loadable(lazy(() => import('@wcj/tools-react-markdown-to-html')));
const HTMLEscape = Loadable(lazy(() => import('@wcj/tools-react-html-escape')));
const Base64Encoder = Loadable(lazy(() => import('@wcj/tools-react-base64-encoder')));
const QRCodeGenerator = Loadable(lazy(() => import('@wcj/tools-react-qrcode-generator')));
const ChinesePinyinConversion = Loadable(lazy(() => import('@wcj/tools-react-chinese-pinyin-conversion')));
const CodeToImage = Loadable(lazy(() => import('@wcj/tools-react-code-to-image')));
// @ts-ignore
const GenerateGithubBadges = Loadable(lazy(() => import('@wcj/tools-react-generate-github-badges')));
// @ts-ignore
const TomlToJSON = Loadable(lazy(() => import('@wcj/tools-react-toml-to-json')));
// @ts-ignore
const CSSEasingAnimation = Loadable(lazy(() => import('@wcj/tools-react-css-easing-animation')));
// @ts-ignore
const SimpleMarkdownEditor = Loadable(lazy(() => import('@wcj/tools-react-simple-markdown-editor')));
// @ts-ignore
const JWTDecoder = Loadable(lazy(() => import('@wcj/tools-react-jwt-decoder')));
// @ts-ignore
const JSON2Yaml = Loadable(lazy(() => import('@wcj/tools-react-json-yaml')));
// @ts-ignore
const JSON2XML = Loadable(lazy(() => import('@wcj/tools-react-json-xml')));
const PDFToImg = Loadable(lazy(() => import('@wcj/tools-react-pdf-to-img')));
const ExifViewer = Loadable(lazy(() => import('@wcj/tools-react-exif-viewer')));
const JSON2INI = Loadable(lazy(() => import('@wcj/tools-react-json-ini')));
const JSBeautifier = Loadable(lazy(() => import('@wcj/tools-react-js-beautifier')));
const CSSFormatter = Loadable(lazy(() => import('@wcj/tools-react-css-formatter')));
const HTMLFormatter = Loadable(lazy(() => import('@wcj/tools-react-html-formatter')));
const SVGOptimizer = Loadable(lazy(() => import('@wcj/tools-react-svg-optimizer')));
const AmountInRMB = Loadable(lazy(() => import('@wcj/tools-react-amount-in-rmb')));
const SimplifiedTraditionalChinese = Loadable(lazy(() => import('@wcj/tools-react-simplified-traditional-chinese')));
const StandardChineseCharactersRMB = Loadable(lazy(() => import('@wcj/tools-react-standard-chinese-characters')));
const JSObfuscator = Loadable(lazy(() => import('@wcj/tools-react-js-obfuscator')));

export let routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage title="Home - Dev Support" />,
      },
      {
        path: 'home',
        element: <HomePage title="Home - Dev Support" />,
      },
      {
        path: 'url-encode',
        element: <UrlEncode title="URL Encoder/Decoder - Dev Support" />,
      },
      {
        path: 'json-format',
        element: <JSONFormat title="JSON Format - Dev Support" />,
      },
      {
        path: 'js-beautifier',
        element: <JSBeautifier title="JS Beautifier/Uglify - Dev Support" />,
      },
      {
        path: 'js-obfuscator',
        element: <JSObfuscator title="JS Obfuscator - Dev Support" />,
      },
      {
        path: 'text-case',
        element: <TextCase title="Text Case - Dev Support" />,
      },
      {
        path: 'image-to-base64',
        element: <ImageToBase64 title="Image To Base64 - Dev Support" />,
      },
      {
        path: 'code-to-image',
        element: <CodeToImage title="Code To Image - Dev Support" />,
      },
      {
        path: 'hash',
        element: <Hash title="Hash - Dev Support" />,
      },
      {
        path: 'generate-password',
        element: <GeneratePassword title="Generate Password - Dev Support" />,
      },
      {
        path: 'html-formatter',
        element: <HTMLFormatter title="HTML Formatter/Minify - Dev Support" />,
      },
      {
        path: 'html-escape',
        element: <HTMLEscape title="HTML Escape/Unescape - Dev Support" />,
      },
      {
        path: 'html-to-markdown',
        element: <HtmlToMarkdown title="HTML To Markdown - Dev Support" />,
      },
      {
        path: 'markdown-to-html',
        element: <MarkdownToHtml title="Markdown To HTML - Dev Support" />,
      },
      {
        path: 'base64-encoder',
        element: <Base64Encoder title="Base64 Encoder/Decoder Tool - Dev Support" />,
      },
      {
        path: 'qrcode-generator',
        element: <QRCodeGenerator title="QRCode Generator Tool - Dev Support" />,
      },
      {
        path: 'chinese-pinyin-conversion',
        element: <ChinesePinyinConversion title="Chinese Pinyin Conversion Tool - Dev Support" />,
      },
      {
        path: 'generate-github-badges',
        element: <GenerateGithubBadges title="Generate Github Badges Tool - Dev Support" />,
      },
      {
        path: 'toml-to-json',
        element: <TomlToJSON title="Toml To JSON Tool - Dev Support" />,
      },
      {
        path: 'css-easing-animation',
        element: <CSSEasingAnimation title="CSS Easing Animation Tool - Dev Support" />,
      },
      {
        path: 'css-formatter',
        element: <CSSFormatter title="CSS Formatter/Minify Tool - Dev Support" />,
      },
      {
        path: 'simple-markdown-editor',
        element: <SimpleMarkdownEditor title="Simple Markdown Editor Tool - Dev Support" />,
      },
      {
        path: 'jwt-decoder',
        element: <JWTDecoder title="JWT Decoder Tool - Dev Support" />,
      },
      {
        path: 'json-yaml',
        element: <JSON2Yaml title="JSON/YAML Converter Tool - Dev Support" />,
      },
      {
        path: 'json-xml',
        element: <JSON2XML title="JSON/XML Converter Tool - Dev Support" />,
      },
      {
        path: 'json-ini',
        element: <JSON2INI title="JSON/ini Converter Tool - Dev Support" />,
      },
      {
        path: 'pdf-to-img',
        element: <PDFToImg title="PDF To Image Tool - Dev Support" />,
      },
      {
        path: 'exif-viewer',
        element: <ExifViewer title="Exif Viewer Tool - Dev Support" />,
      },
      {
        path: 'svg-optimizer',
        element: <SVGOptimizer title="SVG Optimizer Tool - Dev Support" />,
      },
      {
        path: 'amount-in-rmb',
        element: <AmountInRMB title="Amount In RMB Tool - Dev Support" />,
      },
      {
        path: 'standard-chinese-characters',
        element: <StandardChineseCharactersRMB title="Table of General Standard Chinese Characters - Dev Support" />,
      },
      {
        path: 'simplified-traditional-chinese',
        element: <SimplifiedTraditionalChinese title="Simplified Traditional Chinese Converter - Dev Support" />,
      },
      { path: '*', element: <NoMatch /> },
    ],
  },
  { path: '*', element: <NoMatch /> },
];
