import Comment from "@/components/modules/comment/Comment";
import styles from "./comments.module.css";
import CommentForm from "./CommentForm";

const Comments = ({ productID, comments }) => {
  return (
    <div>
      <p>نظرات ({comments.filter((comment) => comment.isAccept).length}) :</p>
      <hr />

      <main className={styles.comments}>
        <div className={styles.user_comments}>
          <p className={styles.title}>
            {comments.filter((comment) => comment.isAccept).length}
            دیدگاه برای کپسول قهوه SETPRESSO سازگار با دستگاه نسپرسو ( GOLD ) ده
            -10- عددی
          </p>
          <div>
            {comments.map(
              (comment) =>
                comment.isAccept && <Comment key={comment._id} {...comment} />
            )}
          </div>
        </div>
        <div className={styles.form_bg}>
          <CommentForm productID={productID} />
        </div>
      </main>
    </div>
  );
};

export default Comments;
