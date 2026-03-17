import { Product } from '@/model/product.model'

export const productsCatalog = [
  new Product(
    '1',
    'Teclado Mecânico RGB',
    'Teclado mecânico com iluminação RGB, switches Blue',
    350,
    0.1,
  ),
  new Product('2', 'Mouse Gamer', 'Mouse com precisão 16000 DPI, 8 botões programáveis', 180, 0.05),
  new Product(
    '3',
    'Monitor 24" Full HD',
    'Monitor IPS 24 polegadas, 75Hz, Full HD 1920x1080',
    650,
    0.15,
  ),
  new Product('4', 'Headset Gamer', 'Headset com som surround 7.1, microfone retrátil', 280, 0.1),
  new Product('5', 'Mousepad XL', 'Mousepad grande 800x300mm, base antiderrapante', 85, 0.2),
  new Product(
    '6',
    'Webcam Full HD',
    'Webcam 1080p 30fps com microfone embutido e correção automática de luz',
    220,
    0.1,
  ),
]
