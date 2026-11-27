export const CategoriesFilter = () => (
  <section className="categoriesFilter">
    <h2 className="page-title">Всі товари</h2>

    <div className="filter-top">
      <h3>Фільтри</h3>
      <button type="button" className="reset-btn">
        Очистити всі
      </button>
    </div>

    <nav>
      <ul className="category__list">
        <li className="category__item">
          <a href="#" className="active">
            Усі
          </a>
        </li>
        <li className="category__item">
          <a href="#">Кава в зернах</a>
        </li>
        <li className="category__item">
          <a href="#">Мелена кава</a>
        </li>
        <li className="category__item">
          <a href="#">Кавоварки та аксесуари</a>
        </li>
        <li className="category__item">
          <a href="#">Гаджети для бариста</a>
        </li>
        <li className="category__item">
          <a href="#">Чашки та термоси</a>
        </li>
        <li className="category__item">
          <a href="#">Фільтри та витратні матеріали</a>
        </li>
        <li className="category__item">
          <a href="#">Капсульна кава</a>
        </li>
        <li className="category__item">
          <a href="#">Розчинна кава</a>
        </li>
        <li className="category__item">
          <a href="#">Сиропи та добавки</a>
        </li>
        <li className="category__item">
          <a href="#">Подарункові набори</a>
        </li>
        <li className="category__item">
          <a href="#">Зберігання кави</a>
        </li>
        <li className="category__item">
          <a href="#">Печиво та солодощі до кави</a>
        </li>
      </ul>
    </nav>

    <hr className="divider" />

    <div className="filter__section">
      <div className="filter__section-header">
        <h3>Бренд / Виробник</h3>
        <button type="button" className="reset-btn">
          Очистити
        </button>
      </div>

      <div className="brand-list">
        {[
          ["lavazza", "Lavazza"],
          ["illy", "Illy"],
          ["bialetti", "Bialetti"],
          ["hario", "Hario"],
          ["timemore", "Timemore"],
          ["svit-kavy", "Svit Kavy"],
          ["foundation", "Foundation Coffee Roasters"],
          ["rocket-espresso", "Rocket Espresso"],
        ].map(([value, label]) => (
          <label className="checkbox-item" key={value}>
            <input type="checkbox" name="brand" value={value} />
            <span>{label}</span>
          </label>
        ))}
      </div>
    </div>

    <hr className="divider" />

    <div className="filter__section">
      <div className="filter__section-header">
        <h3>Ціна</h3>
        <button type="button" className="reset-btn">
          Очистити
        </button>
      </div>

      <div className="price__slider-wrapper">
        <div className="slider-track">
          <div className="slider-range" />

          <div
            className="slider-thumb min"
            role="slider"
            aria-label="Мінімальна ціна"
            aria-valuemin="0"
            aria-valuemax="5000"
            aria-valuenow="0"
          />

          <div
            className="slider-thumb max"
            role="slider"
            aria-label="Максимальна ціна"
            aria-valuemin="0"
            aria-valuemax="5000"
            aria-valuenow="1400"
          />
        </div>

        <div className="price-values">
          <span>0 ₴</span>
          <span>5000 ₴</span>
        </div>
      </div>
    </div>
  </section>
);
