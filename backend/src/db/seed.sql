-- Inserir categorias
INSERT INTO categories (name) VALUES
('Museu'),
('Monumento'),
('Prédio Histórico');

-- Inserir cidades
INSERT INTO cities (name) VALUES
('Cidade Antiga');

-- Inserir locais históricos
INSERT INTO places (name, description, category_id, city_id, location)
VALUES
('Museu da Cidade', 'Museu sobre a história local', 1, 1, ST_GeogFromText('SRID=4326;POINT(-49.0000 -26.5000)')),
('Praça Central', 'Monumento histórico no centro da cidade', 2, 1, ST_GeogFromText('SRID=4326;POINT(-49.0020 -26.5010)')),
('Antigo Teatro', 'Prédio histórico do teatro da cidade', 3, 1, ST_GeogFromText('SRID=4326;POINT(-49.0010 -26.5020)'));
