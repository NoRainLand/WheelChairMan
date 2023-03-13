declare var LayaZip: {
    Init: () => void;
    DeBug: boolean;
    ZIP: string;
    BasePathMode: number;
    LazyMode: boolean;
    LazyFilter: Array<string>;
    Version: string;
    CacheZIPFile: boolean;
    AutoSkipZip: boolean;
    clearCacheZip: (url: string | void) => void;
}