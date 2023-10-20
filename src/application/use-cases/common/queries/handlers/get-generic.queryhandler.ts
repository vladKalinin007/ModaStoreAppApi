// import {GetGenericQuery} from "../models/get-generic.query";
// import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
// import {BaseDto} from "../../../../../domain/entities/basic/base-dto.dto";
// import {BaseEntity} from "../../../../../domain/entities/basic/base-entity.entity";
//
// @QueryHandler(GetGenericQuery)
// export class GetGenericQueryHandler<D extends BaseDto, E extends BaseEntity>
//     implements IQueryHandler<GetGenericQuery<D, E>, Promise<D[]>> {
//     constructor(
//         @InjectRepository(E)
//         private readonly repository: Repository<E>,
//     ) {}
//
//     async execute(query: GetGenericQuery<D, E>): Promise<D[]> {
//         const { id, productParams } = query;
//
//         if (E === Product) {
//             if (!id) {
//                 const specs = new ProductSpecification(productParams);
//                 const products = await this.repository.find(specs);
//                 return products.map((product) => product.toDto<D>());
//             }
//
//             const spec = new ProductSpecification(id);
//             const product = await this.repository.findOne(spec);
//             return product.toDto<D>();
//         }
//
//         const queryBuilder = this.repository.createQueryBuilder('entity');
//
//         if (!id) {
//             const entities = await queryBuilder.getMany();
//             return entities.map((entity) => entity.toDto<D>());
//         }
//
//         const entity = await queryBuilder.where('entity.id = :id', { id }).getOne();
//         return entity.toDto<D>();
//     }
// }
