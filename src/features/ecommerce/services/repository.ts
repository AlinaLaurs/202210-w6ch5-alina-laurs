export interface Repository<J> {
    getAll: () => Promise<Array<J>>;
    get?: (id: number) => Promise<J>;
    create: (item: Partial<J>) => Promise<J>;
    update: (item: Partial<J>) => Promise<J>;
    delete: (id: number) => Promise<void>;
}
