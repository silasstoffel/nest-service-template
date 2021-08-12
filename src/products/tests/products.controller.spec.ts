import { Test, TestingModule } from '@nestjs/testing';
import { Product } from '../entities/product.entity';
import { ProductService } from '../product.service';
import { ProductsController } from '../products.controller';

describe('ProductsController', () => {
  let productService: ProductService;
  let productController: ProductsController;
  const product: Product = {
    id: '9639b824-48b1-4df1-9ede-9aaed754999f',
    name: 'iPhone',
    description: 'iPhone Description',
    price: 7899.99,
  };

  beforeEach(async () => {
    // create module
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductService],
    }).compile();

    productService = moduleRef.get<ProductService>(ProductService);
    productController = moduleRef.get<ProductsController>(ProductsController);
  });

  describe('Dependences', () => {
    it('Dependences should be defined', () => {
      expect(productService).toBeDefined();
      expect(productController).toBeDefined();
    });
  });

  describe('index()', () => {
    it('should return array of products', async () => {
      const products: Product[] = [product];

      jest
        .spyOn(productService, 'findAll')
        .mockImplementation(async () => products);

      const response = await productController.index();
      expect(response.success).toBeTruthy();
      expect(response.data).toBe(products);
    });
  });

  describe('get()', () => {
    it('should return one product', async () => {
      jest
        .spyOn(productService, 'findById')
        .mockImplementation(async () => product);

      const loaded = await productController.get({ id: product.id });
      expect(loaded.data).toBe(product);
    });

    it('should return if not found product', async () => {
      jest
        .spyOn(productService, 'findById')
        .mockImplementation(async () => null);
      const response = await productController.get({ id: '' });
      expect(response.data).toBeNull();
    });
  });

  describe('store()', () => {
    it('should create product', async () => {
      await expect(productController.store(product)).resolves.not.toThrow();
    });

    it('should not create product', async () => {
      const invalid: Product = {
        id: null,
        name: '',
        description: null,
        price: 7899.99,
      };
      expect.assertions(1);
      try {
        await productController.store(invalid);
      } catch (e) {
        expect(e.message).toBe('Name is required.');
      }
    });
  });

  describe('update()', () => {
    it('should update product', async () => {
      const id = product.id;
      await expect(
        productController.update(product, { id }),
      ).resolves.not.toThrow();
    });
  });

  describe('delete()', () => {
    it('should delete product', async () => {
      const id = product.id;
      await expect(productController.delete({ id })).resolves.not.toThrow();
    });
  });
});
