import React from 'react';
import { ExternalLink, Calendar, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building a Geolocation Failover Based Scalable Web Architecture on AWS',
      excerpt: 'A deep dive into building resilient, multi-region AWS architectures using Route 53, health checks, and autoscaling.',
      url: 'https://medium.com/@prasadcpatil246/building-a-geolocation-failover-based-scalable-web-architecture-on-aws-a22e7b8fb4da',
      date: 'Published on Medium',
      readTime: '8 min read',
      featured: true
    },
    {
      title: 'Setting Up Docker and Gitea on Ubuntu Server: A Comprehensive Guide',
      excerpt: 'Complete walkthrough of installing and configuring Docker and Gitea on Ubuntu Server for self-hosted Git repository management.',
      url: 'https://medium.com/@prasadcpatil246/setting-up-docker-and-gitea-on-ubuntu-server-a-comprehensive-guide-9d40937c5bfb',
      date: 'Published on Medium',
      readTime: '6 min read',
      featured: false
    },
    {
      title: 'CI/CD with GitHub Actions and Self-Hosted Runner to Deploy a Static Site on Minikube',
      excerpt: 'Learn how to set up a complete CI/CD pipeline using GitHub Actions with self-hosted runners to deploy static sites on Minikube.',
      url: 'https://medium.com/@prasadcpatil246/ci-cd-with-github-actions-and-self-hosted-runner-to-deploy-a-static-site-on-minikube-6cd6aeef76fa',
      date: 'Published on Medium',
      readTime: '10 min read',
      featured: false
    }
    {
      title: 'From Dev To Delivery : How I Used AI to Build and GitHub Actions To Ship a Full Desktop App',
      excerpt: 'Learn how to use for faster and effective development',
      url: 'https://medium.com/@prasadcpatil246/from-dev-to-delivery-how-i-used-ai-to-build-and-github-actions-to-ship-a-full-desktop-app-718d33fe483a',
      date: 'Published on Medium',
      readTime: '10 min read',
      featured: false
    }

  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Blog</h2>
          
          {/* Featured Article */}
          {featuredPost && (
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-white mb-6">Featured Article</h3>
              <div className="bg-zinc-800 rounded-lg p-8 border border-zinc-700 hover:border-zinc-600 transition-colors group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {featuredPost.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-4">{featuredPost.excerpt}</p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <a
                    href={featuredPost.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-6 p-3 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-colors group-hover:scale-105 transform"
                  >
                    <ExternalLink size={20} className="text-blue-400" />
                  </a>
                </div>
                
                <div className="pt-6 border-t border-zinc-700">
                  <a
                    href={featuredPost.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center transition-colors"
                  >
                    Read full article on Medium
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Other Articles */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">More Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-zinc-600 transition-colors group"
                >
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center transition-colors"
                  >
                    Read article
                    <ExternalLink size={14} className="ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="https://medium.com/@prasadcpatil246"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View All Articles on Medium
              <ExternalLink size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;