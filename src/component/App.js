import React from 'react';
import styles from "./App.css"

class Demo extends React.Component {
    render() {
        return (
            <div className="testing" styleName={styles.demo}>
                <p>Hello World</p>
            </div>
        );
    }
}

export default Demo;