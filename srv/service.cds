using db as data from '../db/schema';

service MyService {

    @odata.draft.enabled
    entity mark_t as projection on data.marks;

}