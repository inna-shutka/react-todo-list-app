import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './index.module.css';
import { useState } from 'react';
import { Input } from '../components/Input/Input';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Button } from '../components/Button/Button';
import { Card } from '../components/Card/Card';

function App({ }) {
    const [inputValue, setInputValue] = useState('');
    const [check, setCheck] = useState(false);

    return (
        <div className={styles.container}>
            <Input value={inputValue} onChange={setInputValue} placeholder={'Placeholder'} />
            <div className={styles.buttonsAll}>
                <Checkbox checked={check} onChange={setCheck}>
                    Done
                </Checkbox>
                <Button className={styles.buttonPrimary} variant='primary'>
                    Button
                </Button>
                <Button className={styles.buttonText} variant='text'>
                    Add New Task
                </Button>
                <Button
                    className={styles.buttonIcon}
                    variant='icon'
                    icon='IconMore'
                    size='medium'
                >
                </Button>
                <Button
                    className={styles.buttonIcon}
                    variant='icon'
                    icon='IconAdd'
                    size="large"
                >
                </Button>
                <Button
                    className={styles.buttonIcon}
                    variant='icon'
                    icon='IconClose'
                    size='medium'
                >
                </Button>
                <Button
                    className={styles.buttonIcon}
                    variant='icon'
                    icon='IconDelete'
                    size='medium'
                >
                </Button>
                <Button
                    className={styles.buttonIcon}
                    variant='icon'
                    icon='IconArrowDown'
                    size='medium'
                >
                </Button>
                <Button
                    className={styles.buttonIcon}
                    variant='icon'
                    icon='IconArrowUp'
                    size='medium'
                >
                </Button>
                <Button
                    className={styles.buttonIcon}
                    variant='icon'
                    icon='IconEdit'
                    size='medium'
                >
                </Button>
            </div>
            <Card
                title='Task title'
                text='Lorem ipsum dolor sit amet consectetur. Hendrerit metus etiam in sed vulputate tellus diam dui.'
            />
        </div>
    );
}

export default App
