import { useEffect, useState } from 'react';
import DefaultLayout from '../../../layouts/Default Layout';
import { useParams } from 'react-router-dom';
import { getDetailPost } from '../../../assets/api/api';
import '../../components/styles/news.scss';
import FormContact from '../../components/FormContact';
import Footer from '../../../layouts/Default Layout/Footer';
const NewsDetail = () => {
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState(null);
  useEffect(() => {
    const fetchPostDetail = async () => {
      const response = await getDetailPost(id);
      setPostDetail(response);
    };
    fetchPostDetail();
  }, [id]);
  if (!postDetail) return null;
  return (
    <DefaultLayout>
      <div className="news_detail_page">
        <section className="main">
          <div className="container">
            <div className="wrapper">
              <h2 className="title">{postDetail.title?.rendered}</h2>
              <div
                className="post_content"
                dangerouslySetInnerHTML={{
                  __html: postDetail.content?.rendered,
                }}
              ></div>
            </div>
          </div>
        </section>
        <section className=" bg_footer">
          <div className="sec_gap form_section">
            <FormContact />
          </div>
          {/* Footer */}
          <Footer />
        </section>
      </div>
    </DefaultLayout>
  );
};
export default NewsDetail;
