import DefaultLayout from '../../layouts/Default Layout';
import Banner from '../components/Banner';
import '../../pages/components/styles/news.scss';
import NewsCard from '../components/NewsCard';
import { useNavigate } from 'react-router-dom';
import FormContact from '../components/FormContact';
import Footer from '../../layouts/Default Layout/Footer';
import { useState, useEffect } from 'react';
import { getDataPost } from '../../assets/api/api';
const News = () => {
  const navigate = useNavigate();
  const [dataPost, setDataPost] = useState([]);
  useEffect(() => {
    const fetchDataPost = async () => {
      const data = await getDataPost();
      if (data) {
        console.log(data);
        setDataPost(data);
      }
    };
    fetchDataPost();
  }, []);
  if (!dataPost) return null;
  const handleNavigation = (id) => {
    navigate(`/news/${id}`);
  };
  return (
    <DefaultLayout>
      <div className="news_page">
        <Banner
          heading="Tin tức"
          dataaos="fade-up"
          desc="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
        />
        <section className="main">
          <div className="container">
            <div className="news_section news_top">
              <div className="news_body">
                <div className="news_left">
                  {dataPost.slice(0, 1).map((post, id) => (
                    <NewsCard
                      onCLick={() => {
                        handleNavigation(post.id);
                      }}
                      key={id}
                      image={post.acf?.thumb_img?.url}
                      date={post.date}
                      title={post.title?.rendered}
                      desc={post.acf?.short_description}
                    />
                  ))}
                </div>
                <div className="news_right">
                  {dataPost.slice(0, 4).map((post, id) => (
                    <NewsCard
                      onCLick={() => {
                        handleNavigation(post.id);
                      }}
                      key={id}
                      image={post.acf?.thumb_img?.url}
                      date={post.date}
                      title={post.title?.rendered}
                      desc={post.acf?.short_description}
                    />
                  ))}
                </div>
              </div>
            </div>
            <section className="sec_gap news_all">
              <div className="heading text-white">
                <h2>Tất cả tin tức </h2>
              </div>
              <div className="news_section news_bottom">
                <div className="news_body">
                  <div className="news_content">
                    {dataPost.map((post, id) => (
                      <NewsCard
                        onCLick={() => {
                          handleNavigation(post.id);
                        }}
                        key={id}
                        image={post.acf?.thumb_img?.url}
                        date={post.date}
                        title={post.title?.rendered}
                        desc={post.acf?.short_description}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section className=" bg_footer">
            <div className="sec_gap form_section">
              <FormContact />
            </div>
            {/* Footer */}
            <Footer />
          </section>
        </section>
      </div>
    </DefaultLayout>
  );
};
export default News;
