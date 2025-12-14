-- Tabela de categorias de pontos históricos
CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Tabela de cidades 
CREATE TABLE IF NOT EXISTS cities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Tabela de locais históricos
CREATE TABLE IF NOT EXISTS places (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    category_id INTEGER REFERENCES categories(id),
    city_id INTEGER REFERENCES cities(id),
    location GEOGRAPHY(Point, 4326) -- latitude/longitude
);
