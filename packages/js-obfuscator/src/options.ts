import { ObfuscatorOptions } from 'javascript-obfuscator';

export const allOptions: ObfuscatorOptions = {
  compact: true,
  /**
   * Enables code control flow flattening. Control flow flattening is a structure transformation of the source code that hinders program comprehension.
   *
   * This option greatly affects the performance up to 1.5x slower runtime speed.
   * Use `controlFlowFlatteningThreshold` to set percentage of nodes that will affected by control flow flattening.
   */
  controlFlowFlattening: false,
  /**
   * `controlFlowFlattening` 转换将应用于任何给定节点的概率。
   * `controlFlowFlatteningThreshold`: 0 equals to `controlFlowFlattening`: false.
   */
  controlFlowFlatteningThreshold: 0.75,
  /**
   * ⚠️ Dramatically increases size of obfuscated code (up to 200%), use only if size of obfuscated code doesn't matter. Use `deadCodeInjectionThreshold` to set percentage of nodes that will affected by dead code injection.
   * ⚠️ This option forcibly enables stringArray option.
   * With this option, random blocks of dead code will be added to the obfuscated code.
   */
  deadCodeInjection: false,
  /** Allows to set percentage of nodes that will affected by `deadCodeInjection`. */
  deadCodeInjectionThreshold: 0.4,
  /**
   * Can freeze your browser if you open the Developer Tools.
   * This option makes it almost impossible to use the debugger function of the Developer Tools (both on WebKit-based and Mozilla Firefox).
   */
  debugProtection: false,
  /**
   * ⚠️ Can freeze your browser! Use at own risk.
   * If set, an interval in milliseconds is used to force the debug mode on the Console tab, making it harder to use other features of the Developer Tools.
   * Works if `debugProtection` is enabled.
   * Recommended value is between 2000 and 4000 milliseconds.
   */
  debugProtectionInterval: 0,
  /**
   * ⚠️ This option disables console calls globally for all scripts
   * Disables the use of console.log, console.info, console.error, console.warn, console.debug, console.exception and console.trace by replacing them with empty functions. This makes the use of the debugger harder.
   */
  disableConsoleOutput: false,
  /**
   * ⚠️ This option does not work with target: 'node'
   * Allows to run the obfuscated source code only on specific domains and/or sub-domains. This makes really hard for someone to just copy and paste your source code and run it elsewhere.
   * If the source code isn't run on the domains specified by this option, the browser will be redirected to a passed to the domainLockRedirectUrl option URL.
   *
   * It's possible to lock your code to more than one domain or sub-domain. For instance, to lock it so the code only runs on www.example.com add www.example.com. To make it work on the root domain including any sub-domains (example.com, sub.example.com), use .example.com.
   */
  // domainLock: [],
  // domainLockRedirectUrl: string,
  // forceTransformStrings: string[],
  // identifierNamesCache: TIdentifierNamesCache,
  // identifierNamesGenerator: TTypeFromEnum<typeof IdentifierNamesGenerator>,
  // identifiersDictionary: string[],
  // identifiersPrefix: string,
  /**
   * Default: false
   * Prevents obfuscation of require imports. Could be helpful in some cases when for some reason runtime environment requires these imports with static strings only.
   */
  ignoreImports: false,
  /**
   * Allows to set name of the input file with source code. This name will be used internally for source map generation. Required when using NodeJS API and sourceMapSourcesMode option has sources value`.
   */
  inputFileName: '',
  /**
   * Enables logging of the information to the console.
   */
  log: false,
  /**
   * Enables numbers conversion to expressions
   */
  numbersToExpressions: false,
  // optionsPreset: TOptionsPreset,
  /**
   * ⚠️ this option can break your code. Enable it only if you know what it does!
   * Enables obfuscation of global variable and function names with declaration.
   *
   * To switch between safe and unsafe modes of this option use `renamePropertiesMode` option.
   *
   * To set format of renamed property names use `identifierNamesGenerator` option.
   *
   * To control which properties will be renamed use `reservedNames` option.
   */
  renameGlobals: false,
  /**
   *  Default: false
   *
   * ⚠️ this option MAY break your code. Enable it only if you know what it does!
   * Enables renaming of property names. All built-in DOM properties and properties in core JavaScript classes will be ignored.
   *
   * To switch between safe and unsafe modes of this option use renamePropertiesMode option.
   *
   * To set format of renamed property names use identifierNamesGenerator option.
   *
   * To control which properties will be renamed use reservedNames option.
   */
  renameProperties: false,
  // renamePropertiesMode: TRenamePropertiesMode,
  // reservedNames: string[],
  // reservedStrings: string[],
  // seed: string | number,
  /**
   * Default: false
   *
   * ⚠️ Don't change obfuscated code in any way after obfuscation with this option, because any change like uglifying of code can trigger self defending and code wont work anymore!
   *
   * ⚠️ This option forcibly sets compact value to true
   *
   * This option makes the output code resilient against formatting and variable renaming. If one tries to use a JavaScript beautifier on the obfuscated code, the code won't work anymore, making it harder to understand and modify it.
   */
  selfDefending: false,
  /**
   * Default: true
   *
   * Enables additional code obfuscation through simplification.
   * ⚠️ in future releases obfuscation of boolean literals (true => !![]) will be moved under this option.
   */
  simplify: true,
  /**
   * Default: false
   *
   * Enables source map generation for obfuscated code.
   *
   * Source maps can be useful to help you debug your obfuscated JavaScript source code. If you want or need to debug in production, you can upload the separate source map file to a secret location and then point your browser there.
   */
  sourceMap: false,
  /**
   * Sets base url to the source map import url when sourceMapMode: 'separate'.
   */
  sourceMapBaseUrl: '',
  /**
   * Sets file name for output source map when sourceMapMode: 'separate'.
   */
  sourceMapFileName: '',
  // sourceMapMode: TTypeFromEnum<typeof SourceMapMode>;
  // sourceMapSourcesMode: TTypeFromEnum<typeof SourceMapSourcesMode>;
  // splitStrings: boolean;
  // splitStringsChunkLength: number;
  // stringArray: boolean;
  // stringArrayCallsTransform: boolean;
  // stringArrayCallsTransformThreshold: number;
  // stringArrayEncoding: TStringArrayEncoding[];
  // stringArrayIndexesType: TStringArrayIndexesType[];
  // stringArrayIndexShift: boolean;
  // stringArrayRotate: boolean;
  // stringArrayShuffle: boolean;
  // stringArrayWrappersChainedCalls: boolean;
  // stringArrayWrappersCount: number;
  // stringArrayWrappersParametersMaxCount: number;
  // stringArrayWrappersType: TStringArrayWrappersType;
  // stringArrayThreshold: number;
  target: 'browser',
  // target: TTypeFromEnum<typeof ObfuscationTarget>;
  // transformObjectKeys: boolean;
  // unicodeEscapeSequence: boolean;
};

/**
 * High obfuscation, low performance
 * The performance will be much slower than without obfuscation
 */
export const highOption: ObfuscatorOptions = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 1,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 1,
  debugProtection: true,
  debugProtectionInterval: 4000,
  disableConsoleOutput: true,
  identifierNamesGenerator: 'hexadecimal',
  log: false,
  numbersToExpressions: true,
  renameGlobals: false,
  selfDefending: true,
  simplify: true,
  splitStrings: true,
  splitStringsChunkLength: 5,
  stringArray: true,
  stringArrayCallsTransform: true,
  stringArrayEncoding: ['rc4'],
  stringArrayIndexShift: true,
  stringArrayRotate: true,
  stringArrayShuffle: true,
  stringArrayWrappersCount: 5,
  stringArrayWrappersChainedCalls: true,
  stringArrayWrappersParametersMaxCount: 5,
  stringArrayWrappersType: 'function',
  stringArrayThreshold: 1,
  transformObjectKeys: true,
  unicodeEscapeSequence: false,
};

/**
 * Medium obfuscation, optimal performance
 * The performance will be slower than without obfuscation
 */
export const mediumOption: ObfuscatorOptions = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.75,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 0.4,
  debugProtection: false,
  debugProtectionInterval: 0,
  disableConsoleOutput: true,
  identifierNamesGenerator: 'hexadecimal',
  log: false,
  numbersToExpressions: true,
  renameGlobals: false,
  selfDefending: true,
  simplify: true,
  splitStrings: true,
  splitStringsChunkLength: 10,
  stringArray: true,
  stringArrayCallsTransform: true,
  stringArrayCallsTransformThreshold: 0.75,
  stringArrayEncoding: ['base64'],
  stringArrayIndexShift: true,
  stringArrayRotate: true,
  stringArrayShuffle: true,
  stringArrayWrappersCount: 2,
  stringArrayWrappersChainedCalls: true,
  stringArrayWrappersParametersMaxCount: 4,
  stringArrayWrappersType: 'function',
  stringArrayThreshold: 0.75,
  transformObjectKeys: true,
  unicodeEscapeSequence: false,
};

/**
 * Low obfuscation, High performance
 * The performance will be at a relatively normal level
 */
export const lowOption: ObfuscatorOptions = {
  compact: true,
  controlFlowFlattening: false,
  deadCodeInjection: false,
  debugProtection: false,
  debugProtectionInterval: 0,
  disableConsoleOutput: true,
  identifierNamesGenerator: 'hexadecimal',
  log: false,
  numbersToExpressions: false,
  renameGlobals: false,
  selfDefending: true,
  simplify: true,
  splitStrings: false,
  stringArray: true,
  stringArrayCallsTransform: false,
  stringArrayEncoding: [],
  stringArrayIndexShift: true,
  stringArrayRotate: true,
  stringArrayShuffle: true,
  stringArrayWrappersCount: 1,
  stringArrayWrappersChainedCalls: true,
  stringArrayWrappersParametersMaxCount: 2,
  stringArrayWrappersType: 'variable',
  stringArrayThreshold: 0.75,
  unicodeEscapeSequence: false,
};
/**
 * Default preset, High performance
 */
export const defaultOption: ObfuscatorOptions = {
  compact: true,
  controlFlowFlattening: false,
  deadCodeInjection: false,
  debugProtection: false,
  debugProtectionInterval: 0,
  disableConsoleOutput: false,
  identifierNamesGenerator: 'hexadecimal',
  log: false,
  numbersToExpressions: false,
  renameGlobals: false,
  selfDefending: false,
  simplify: true,
  splitStrings: false,
  stringArray: true,
  stringArrayCallsTransform: false,
  stringArrayCallsTransformThreshold: 0.5,
  stringArrayEncoding: [],
  stringArrayIndexShift: true,
  stringArrayRotate: true,
  stringArrayShuffle: true,
  stringArrayWrappersCount: 1,
  stringArrayWrappersChainedCalls: true,
  stringArrayWrappersParametersMaxCount: 2,
  stringArrayWrappersType: 'variable',
  stringArrayThreshold: 0.75,
  unicodeEscapeSequence: false,
};
