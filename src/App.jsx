import 'bulma/css/bulma.css';
import { useState } from 'react';
import cn from 'classnames';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [isAlphabeticaly, setIsAlphabeticaly] = useState(true);
  const [isLength, setIsLength] = useState(true);
  const [isReverse, setReverse] = useState(true);

  const sortGoods = () => {
    let newGoods = [...goodsFromServer];

    if (!isAlphabeticaly) {
      newGoods = newGoods.sort((good1, good2) => good1.localeCompare(good2));
    }

    if (!isLength) {
      newGoods = newGoods.sort((good1, good2) => good1.length - good2.length);
    }

    if (!isReverse) {
      newGoods = newGoods.reverse();
    }

    return newGoods;
  };

  const sortByAlphabetically = () => {
    setIsAlphabeticaly(false);
    setIsLength(true);
    setReverse(true);
  };

  const sortByLength = () => {
    setIsAlphabeticaly(true);
    setIsLength(false);
    setReverse(true);
  };

  const reverseGoods = () => {
    setReverse(!isReverse);
  };

  const reset = () => {
    setIsAlphabeticaly(true);
    setIsLength(true);
    setReverse(true);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={cn('button', 'is-info', {
            'is-light': isAlphabeticaly,
          })}
          onClick={sortByAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={cn('button', 'is-success', {
            'is-light': isLength,
          })}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={cn('button', 'is-warning', {
            'is-light': isReverse,
          })}
          onClick={reverseGoods}
        >
          Reverse
        </button>

        {!(isAlphabeticaly && isLength && isReverse) && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={reset}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {sortGoods().map(good => (
          <li data-cy="Good" key={good}>{good}</li>
        ))}
      </ul>
    </div>
  );
};