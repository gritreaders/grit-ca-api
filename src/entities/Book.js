'use strict';

module.exports = class Book {
  constructor(
    title,
    content,
    shortContent,
    publisher,
    publishAt,
    pages,
    language,
    detailsUrl,
    downloadUrl,
    readOnlineUrl,
    coverUrl,
    thumbnailUrl
  ) {
    this.bookId = undefined;
    this.title = title;
    this.content = content;
    this.shortContent = shortContent;
    this.publisher = publisher;
    this.publishAt = publishAt;
    this.pages = pages;
    this.language = language;
    this.detailsUrl = detailsUrl;
    this.downloadUrl = downloadUrl;
    this.readOnlineUrl = readOnlineUrl;
    this.coverUrl = coverUrl;
    this.thumbnailUrl = thumbnailUrl;
  }
};
