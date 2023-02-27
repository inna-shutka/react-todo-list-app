import { useState } from 'react';
import styles from './index.module.css';
import { Input } from '../components/Input/Input';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Button } from '../components/Button/Button';

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
                    variant="icon"
                    icon="IconMore"
                    size="medium"
                >
                </Button>
                <Button
                    className={styles.buttonIcon}
                    variant="icon"
                    icon="IconAdd"
                    size="large"
                >
                </Button>
                <Button
                    className={styles.buttonIcon}
                    variant="icon"
                    icon="IconClose"
                    size="medium"
                >
                </Button>
                <Button
                    className={styles.buttonIcon}
                    variant="icon"
                    icon="IconDelete"
                    size="medium"
                >
                </Button>
                <Button
                    className={styles.buttonIcon}
                    variant="icon"
                    icon="IconArrowDown"
                    size="medium"
                >
                </Button>
                <Button
                    className={styles.buttonIcon}
                    variant="icon"
                    icon="IconArrowUp"
                    size="medium"
                >
                </Button>
                <Button
                    className={styles.buttonIcon}
                    variant="icon"
                    icon="IconEdit"
                    size="medium"
                >
                </Button>
            </div>
        </div>
    );
}

export default App
