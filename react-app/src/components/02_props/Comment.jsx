import React from 'react';

const styles = {
    wrapper : {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border : "1px solid gray",
        borderRadius: 16,
    },
    image : {
        width: 50,
        height: 50,
        borderRadius: 25, 
    },
    contentContainer : {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems : "flex-start",
        fontSize: 16,
        color: "black",
    },
    nameText : {
        fontWeight: "bold",
    }
}

function Comment(props) {
    return (
        <div style={style.wrapper}>
            <div>
                <img src={props.path} alt="프로필 이미지" style={styles.image} />
            </div>
            <div style={style.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span>{props.comment}</span>
            </div>
        </div>
    )
}

export default Comment