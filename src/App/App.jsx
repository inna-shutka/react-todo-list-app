import { useState, useEffect } from 'react';
import { Input } from '../components/Input';
import { Checkbox } from '../components/Checkbox';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { PopupDelete } from '../components/PopupDelete';
import { EditableButton } from '../components/EditableButton';
import { Tag } from '../components/Tag';
import styles from './App.module.css';

export const App = () => {
    const [inputValue, setInputValue] = useState('');
    const [check, setCheck] = useState(false);
    const [onDelete, setOnDelete] = useState(false);
    const [onDeleted, setOnDeleted] = useState(true);
    const [newValue, setNewValue] = useState('');
    const [done, onDoneChange] = useState(false);

    const onSave = async () => {
        return true;
    };

    useEffect(() => {
        return () => setOnDelete(false);
    }, [onDeleted]);

    return (
        <div className={styles.container}>
            <Input
            type='text'
            value={inputValue}
            onChange={setInputValue}
            placeholder='Placeholder'
            />
            <div className={styles.allButtons}>
                <Checkbox checked={check} onChange={setCheck}>
                    Done
                </Checkbox>
                <Button variant='primary'>Button</Button>
                <Button variant='icon' icon='actions' size='medium'/>
                <Button variant='icon' icon='plus' size='medium'/>
                <Button variant='danger'>Button</Button>
                <Button variant='dashed' icon='plus'>Button</Button>
                <Button variant='text'>Cancel</Button>
            </div>
            {onDeleted && (
                <Card
                title='Task title'
                text='Lorem ipsum dolor sit amet consectetur. Hendrerit metus etiam in sed vulputate tellus diam dui.'
                onDelete={() => setOnDelete(!onDelete)}
                onEdit={() => undefined}
                done={done}
                onDoneChange={onDoneChange}
                tags={[]}
                />
            )}
            {onDelete && (
            <PopupDelete
            onDeleted={() => setOnDeleted(!onDeleted)}
            title='Do you really want to delete this task?'
            />
            )}
            <EditableButton
            icon='plus'
            value={newValue}
            onChange={setNewValue}
            onSave={onSave}
            >
                add new task
            </EditableButton>
        </div>
    );
};

export default App;
