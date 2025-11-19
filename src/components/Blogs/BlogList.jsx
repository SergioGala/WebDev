import React, { useRef, useEffect } from "react";
import AnimatedAnchorTagBlog from "./AnimatedAnchorTagBlog";
import "./Blog.css";
import SpecialButton from "./SpecialButton";
import useIsMobile from "../../hooks/UseIsMobile";

const BlogList = () => {
  const isMobile = useIsMobile(1200);

  const previewWrap = useRef(null);
  const previewInner = useRef(null);

  const followerWraps = useRef([]);
  const followerInners = useRef([]);

  const mousePos = useRef({ x: 0, y: 0 });
  const followers = 3;

  const posts = [
    {
      meta: "Entrada de blog",
      title: "Tres marcas convierten la sostenibilidad en algo natural",
      time: "4 mins de lectura",
      img: "https://picsum.photos/400/300?1",
      to: "/post/1",
    },
    {
      meta: "Entrada de blog",
      title:
        "Dominar las cadenas de suministro de contenidos para lograr relevancia y escala",
      time: "6 mins de lectura",
      img: "https://picsum.photos/400/300?2",
      to: "/post/2",
    },
    {
      meta: "Entrada de blog",
      title:
        "Why Discounts Hurt Your Brand on Amazon (And What to Do Instead)",
      time: "3 mins de lectura",
      img: "https://picsum.photos/400/300?3",
      to: "/post/3",
    },
  ];

  useEffect(() => {
    if (isMobile) return;

    const speeds = [0.15, 0.1, 0.06];

    const animate = () => {
      followerWraps.current.forEach((wrap, i) => {
        if (!wrap) return;

        const rect = wrap.getBoundingClientRect();
        const { x, y } = mousePos.current;

        const newX = rect.left + (x - rect.left) * speeds[i];
        const newY = rect.top + (y - rect.top) * speeds[i];

        wrap.style.transform = `translate(${newX}px, ${newY}px)`;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [isMobile]);

  const handleEnter = (img) => {
    if (isMobile) return;
    if (!previewInner.current) return;

    previewInner.current.style.backgroundImage = `url(${img})`;
    previewInner.current.style.opacity = 1;
    previewInner.current.style.transform = "scale(1)";

    followerInners.current.forEach((inner) => {
      if (!inner) return;
      inner.style.opacity = 0.4;
      inner.style.transform = "scale(1)";
    });
  };

  const handleLeave = () => {
    if (isMobile) return;
    if (!previewInner.current) return;

    previewInner.current.style.opacity = 0;
    previewInner.current.style.transform = "scale(0.8)";

    followerInners.current.forEach((inner) => {
      if (!inner) return;
      inner.style.opacity = 0;
      inner.style.transform = "scale(0.8)";
    });
  };


  const handleMove = (e) => {
    if (isMobile) return;

    mousePos.current = { x: e.clientX, y: e.clientY };

    if (!previewWrap.current) return;

    previewWrap.current.style.transform = `translate(${e.clientX + 20}px, ${
      e.clientY + 20
    }px)`;
  };

  return (
    <>
      <div className="blog-list">
        {posts.map((post, index) => (
          <div
            key={index}
            className="blog-row"
            onMouseEnter={() => handleEnter(post.img)}
            onMouseLeave={handleLeave}
            onMouseMove={handleMove}
          >
            {/* TITLE */}
            <div className="blog-title">{post.title}</div>

            {/* META + TIME juntos */}
            <div className="blog-info-row">
              <span className="blog-meta">{post.meta}</span>
              <span className="blog-reading-time">{post.time}</span>
            </div>

            {/* BUTTON */}
            <div className="blog-action">
              {isMobile ? (
                <SpecialButton to={post.to} />
              ) : (
                <AnimatedAnchorTagBlog text="Leer ahora" to={post.to} />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* preview principal */}
      <div ref={previewWrap} className="preview-wrap">
        <div ref={previewInner} className="preview-inner"></div>
      </div>

      {/* followers */}
      {[...Array(followers)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (followerWraps.current[i] = el)}
          className="follower-wrap"
        >
          <div
            ref={(el) => (followerInners.current[i] = el)}
            className="follower-inner"
          ></div>
        </div>
      ))}
    </>
  );
};

export default BlogList;

