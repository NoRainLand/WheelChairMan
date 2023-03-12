declare var LayaZip: {
    Init: () => void;
    DeBug: boolean;
    ZIP: string;
    BasePathMode: number;
    LazyMode: boolean;
    LazyFliter: Array<string>;
    Version: string;
    CacheZIPFile: boolean;
    AutoSkipZip: boolean;
    clearCacheZip: (url: string | void) => void;
}