import React , {useCallback, useEffect} from 'react'
import styles from './Toast.module.css';


function Toast({ toastList, position, setList}) {
    const deleteToast = useCallback(id=>{
        const toastListitem = toastList.filter(e => e.id !== id);
        setList(toastListitem)
    },[toastList, setList])

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(toastList.length){
                deleteToast(toastList[0].id)
            }
        }, 2000)
        return () => {
            clearInterval(interval);
        }
    },[toastList, deleteToast])

    return (
        <div className={`${styles.container} ${styles[position]}`}>
            {
                toastList.map((toast, i)=>(
                    <div
                    className={`${styles.notification} ${styles.toast} ${styles[position]}`}
                    key={i}
                    style={{backgroundColor: toast.background}}
                    >
                        <button onClick={()=> deleteToast(toast.id)}>X</button>
                        <div>
                            <p className={styles.title}>{toast.title}</p>
                            <p className={styles.description}>{toast.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Toast
