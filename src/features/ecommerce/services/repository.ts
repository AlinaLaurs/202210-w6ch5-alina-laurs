export interface Repository<C> {
    getAll: () => Promise<Array<C>>;
    get?: (id: number) => Promise<C>;
    create: (item: Partial<C>) => Promise<C>;
    update: (item: Partial<C>) => Promise<C>;
    delete: (id: number) => Promise<void>;
}
