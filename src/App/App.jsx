import styles from './App.module.css';
import {
    Checkbox,
    Button,
    Card,
    PopupDelete,
    PopupEdit,
    EditableButton,
    Tag,
} from '../components';
import { useTags } from '../hooks/useTags';
import { useTodo } from '../hooks/useTodo';

export const App = () => {
    const tagsState = useTags();
    const todosState = useTodo(tagsState.activeId);

    return (
    <div className={styles.container}>
        {tagsState.deletingId && (
            <PopupDelete
                title='Do you really want to delete this tag?'
                onClose={() => tagsState.setDeletingId(null)}
                onDelete={tagsState.delete}
            />
        )}
        {todosState.deleteId && (
            <PopupDelete
                title='Do you really want to delete this tag?'
                onClose={() => todosState.setDeleteId(null)}
                onDelete={todosState.delete}
            />
        )}
        {!!todosState.todoEditing && (
            <PopupEdit
                title={todosState.todoEditing?.title}
                text={todosState.todoEditing?.text}
                tags={tagsState.data}
                onClose={() => todosState.setEditId(null)}
                onSave={
                    todosState.editId === 'new' ? todosState.create : todosState.update
                }
                selectedTags={todosState.todoEditing?.tags}
            />
        )}
        <header className={styles.header}>
            <h1 className={styles.todoTitle}>to do list</h1>
            <Button
                icon='plus'
                variant='icon'
                size='large'
                onClick={() => todosState.setEditId('new')}
            />
        </header>
        <main className={styles.main}>
            <div className={styles.mainWrapper}>
                <div className={styles.tagsList}>
                    {tagsState.data.map((tag) => {
                        return (
                            <Tag
                                className={styles.tag}
                                key={tag.id}
                                color={tag.color}
                                active={tagsState.activeId === tag.id}
                                isEditable
                                isActionsVisible={tagsState.deletingId === tag.id}
                                onClick={() => tagsState.toggleActiveId(tag.id)}
                                onSave={(name) => tagsState.update({ ...tag, name })}
                                onDelete={() => tagsState.setDeletingId(tag.id)}
                            >
                                {tag.name}
                            </Tag>
                        );
                    })}
                </div>
                <EditableButton
                    className={styles.editableButton}
                    icon='plus'
                    onSave={tagsState.create}
                >
                    add new task
                </EditableButton>
                <Checkbox
                    checked={todosState.doneTodo}
                    onChange={todosState.setDoneTodo}
                >
                    Hide Done Task
                </Checkbox>
            </div>
            <div className={styles.todoList}>
                {todosState.todos.map((todo) => {
                    return (
                        <Card
                            key={todo.id}
                            title={todo.title}
                            text={todo.text}
                            onDelete={() => todosState.setDeleteId(todo.id)}
                            onClose={() => undefined}
                            onEdit={() => todosState.setEditId(todo.id)}
                            onDoneChange={(done) => todosState.update({ ...todo, done })}
                            done={todo.done}
                            tags={tagsState.getParsedTags(todo.tags)}
                        />
                    );
                })}
            </div>
        </main>
    </div>
    );
};

export default App;
