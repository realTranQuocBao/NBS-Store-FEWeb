import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { listCommentProductsAdminAll } from "../../../Redux/Actions/productActions";
import { useEffect } from "react";

// const comments = [
//   {
//     _id: "6316046924c75f023f1464b8",
//     user: {
//       _id: "62f7e09c5e6ac0ae18128e3d",
//       name: "Pham Nhut",
//       email: "phamnhut@gmail.com",
//       password: "$2a$10$BhHCTyP5g.I/rpNaZps9rOT6ITckApI7S6kBpmKCA4X66.X1cCyOq",
//       avatarUrl: "/images/avatar/2bb6f88a-d29f-44e2-a1c9-9533f2494031.png",
//       isAdmin: false,
//       isDisabled: false,
//       createdAt: "2022-08-13T17:34:20.668Z",
//       updatedAt: "2022-08-26T14:38:07.133Z",
//       __v: 0
//     },
//     product: "62aacf4a89e352a5b3bd06f4",
//     content: "wow i love shoes these aaa",
//     isDisabled: false,
//     replies: [
//       {
//         user: {
//           _id: "624b98120aac26127bb0fbef",
//           name: "Admin",
//           email: "nbs.admin@quocbaoit.com",
//           password: "$2a$10$bizjs.R1ngzDC5ajjalbj.auROF5bN6a4SdS6EKtGCGpqYShGW07e",
//           isAdmin: true,
//           __v: 0,
//           createdAt: "2022-04-05T01:14:58.147Z",
//           updatedAt: "2022-09-05T15:19:17.891Z",
//           avatarUrl: "/images/avatar/98d0b7ae-6a64-4241-a18c-8eaf697e21c7.png",
//           isDisabled: false
//         },
//         product: "62aacf4a89e352a5b3bd06f4",
//         content: "@Pham Nhut Thanks so much. Will you buy it?",
//         parentComment: "6316046924c75f023f1464b8",
//         isDisabled: false,
//         _id: "6316197924c75f023f146743",
//         replies: [],
//         createdAt: "2022-09-05T15:44:57.133Z",
//         updatedAt: "2022-09-05T15:44:57.133Z"
//       }
//     ],
//     createdAt: "2022-09-05T14:15:05.064Z",
//     updatedAt: "2022-09-06T16:49:34.932Z",
//     __v: 3
//   },
//   {
//     _id: "63147fdcc631f3ba2bb41b00",
//     user: {
//       _id: "62f7e09c5e6ac0ae18128e3d",
//       name: "Pham Nhut",
//       email: "phamnhut@gmail.com",
//       password: "$2a$10$BhHCTyP5g.I/rpNaZps9rOT6ITckApI7S6kBpmKCA4X66.X1cCyOq",
//       avatarUrl: "/images/avatar/2bb6f88a-d29f-44e2-a1c9-9533f2494031.png",
//       isAdmin: false,
//       isDisabled: false,
//       createdAt: "2022-08-13T17:34:20.668Z",
//       updatedAt: "2022-08-26T14:38:07.133Z",
//       __v: 0
//     },
//     product: "62ab2799dd3e2191fb5dae67",
//     content: "giày phù hợp với người 20 tuổi không shop ơi",
//     isDisabled: false,
//     replies: [
//       {
//         user: {
//           _id: "624b98120aac26127bb0fbef",
//           name: "Admin",
//           email: "nbs.admin@quocbaoit.com",
//           password: "$2a$10$bizjs.R1ngzDC5ajjalbj.auROF5bN6a4SdS6EKtGCGpqYShGW07e",
//           isAdmin: true,
//           __v: 0,
//           createdAt: "2022-04-05T01:14:58.147Z",
//           updatedAt: "2022-09-05T15:19:17.891Z",
//           avatarUrl: "/images/avatar/98d0b7ae-6a64-4241-a18c-8eaf697e21c7.png",
//           isDisabled: false
//         },
//         product: "62ab2799dd3e2191fb5dae67",
//         content: "Phù hợp bạn nhé",
//         parentComment: "63147fdcc631f3ba2bb41b00",
//         isDisabled: false,
//         _id: "6314808ac631f3ba2bb41bef",
//         replies: [],
//         createdAt: "2022-09-04T10:40:10.596Z",
//         updatedAt: "2022-09-04T10:40:10.596Z"
//       }
//     ],
//     createdAt: "2022-09-04T10:37:16.196Z",
//     updatedAt: "2022-09-04T10:40:10.596Z",
//     __v: 1
//   },
//   {
//     _id: "63147ef6c631f3ba2bb41a3d",
//     user: {
//       _id: "62b19625814199c8d4f172a2",
//       name: "Messi",
//       email: "messi@gmail.com",
//       password: "$2a$10$bizjs.R1ngzDC5ajjalbj.auROF5bN6a4SdS6EKtGCGpqYShGW07e",
//       avatarUrl: "/images/avatar/78a60050-f8ed-4684-9ea7-aefeeb2ee6d7.png",
//       isAdmin: false,
//       isDisabled: false,
//       createdAt: "2022-06-21T09:57:57.068Z",
//       updatedAt: "2022-09-04T10:15:02.662Z",
//       __v: 0
//     },
//     product: "62a028c3c82fef7d8e2af52d",
//     content: "hi messi đây",
//     isDisabled: false,
//     replies: [
//       {
//         user: {
//           _id: "62b19625814199c8d4f172a2",
//           name: "Messi",
//           email: "messi@gmail.com",
//           password: "$2a$10$bizjs.R1ngzDC5ajjalbj.auROF5bN6a4SdS6EKtGCGpqYShGW07e",
//           avatarUrl: "/images/avatar/78a60050-f8ed-4684-9ea7-aefeeb2ee6d7.png",
//           isAdmin: false,
//           isDisabled: false,
//           createdAt: "2022-06-21T09:57:57.068Z",
//           updatedAt: "2022-09-04T10:15:02.662Z",
//           __v: 0
//         },
//         product: "62a028c3c82fef7d8e2af52d",
//         content: "Chào messi nhá",
//         parentComment: "63147ef6c631f3ba2bb41a3d",
//         isDisabled: false,
//         _id: "63147f04c631f3ba2bb41a47",
//         replies: [],
//         createdAt: "2022-09-04T10:33:40.611Z",
//         updatedAt: "2022-09-04T10:33:40.611Z"
//       }
//     ],
//     createdAt: "2022-09-04T10:33:26.062Z",
//     updatedAt: "2022-09-05T12:29:39.701Z",
//     __v: 3
//   },
//   {
//     _id: "63147d8bc631f3ba2bb41a23",
//     user: {
//       _id: "62b19625814199c8d4f172a2",
//       name: "Messi",
//       email: "messi@gmail.com",
//       password: "$2a$10$bizjs.R1ngzDC5ajjalbj.auROF5bN6a4SdS6EKtGCGpqYShGW07e",
//       avatarUrl: "/images/avatar/78a60050-f8ed-4684-9ea7-aefeeb2ee6d7.png",
//       isAdmin: false,
//       isDisabled: false,
//       createdAt: "2022-06-21T09:57:57.068Z",
//       updatedAt: "2022-09-04T10:15:02.662Z",
//       __v: 0
//     },
//     product: "62a028c3c82fef7d8e2af52d",
//     content: "wow this is shoes beautiful. i will buy it",
//     isDisabled: false,
//     replies: [
//       {
//         user: {
//           _id: "62ac0b8224c9d92cc86a98ad",
//           name: "Ronaldo",
//           email: "ronaldo@gmail.com",
//           password: "$2a$10$bizjs.R1ngzDC5ajjalbj.auROF5bN6a4SdS6EKtGCGpqYShGW07e",
//           avatarUrl: "/images/avatar/227bff0c-ed1f-4b63-af6b-b6e06544b041.png",
//           isAdmin: false,
//           isDisabled: false,
//           createdAt: "2022-06-17T05:05:06.124Z",
//           updatedAt: "2022-09-04T06:17:34.024Z",
//           __v: 0
//         },
//         product: "62a028c3c82fef7d8e2af52d",
//         content: "me to",
//         parentComment: "63147d8bc631f3ba2bb41a23",
//         isDisabled: false,
//         _id: "631486adc631f3ba2bb41fe8",
//         replies: [],
//         createdAt: "2022-09-04T11:06:21.735Z",
//         updatedAt: "2022-09-04T11:06:21.735Z"
//       }
//     ],
//     createdAt: "2022-09-04T10:27:23.941Z",
//     updatedAt: "2022-09-04T11:06:21.735Z",
//     __v: 1
//   },
//   {
//     _id: "631430d223a09f3ffb1cbd4c",
//     user: {
//       _id: "62b521b13ecdc486401634eb",
//       name: "Salah",
//       email: "salah@gmail.com",
//       password: "$2a$10$bizjs.R1ngzDC5ajjalbj.auROF5bN6a4SdS6EKtGCGpqYShGW07e",
//       avatarUrl: "/images/avatar/424e1c5a-e1c4-4c35-8e98-12ab62386391.png",
//       isAdmin: false,
//       isDisabled: false,
//       createdAt: "2022-06-24T02:30:09.127Z",
//       updatedAt: "2022-09-04T04:58:19.801Z",
//       __v: 0
//     },
//     product: "62a5b992e18fb9a4ed744ae0",
//     content: "Giày này đá bóng tốt không shop ơi",
//     isDisabled: false,
//     replies: [
//       {
//         user: {
//           _id: "624b98120aac26127bb0fbef",
//           name: "Admin",
//           email: "nbs.admin@quocbaoit.com",
//           password: "$2a$10$bizjs.R1ngzDC5ajjalbj.auROF5bN6a4SdS6EKtGCGpqYShGW07e",
//           isAdmin: true,
//           __v: 0,
//           createdAt: "2022-04-05T01:14:58.147Z",
//           updatedAt: "2022-09-05T15:19:17.891Z",
//           avatarUrl: "/images/avatar/98d0b7ae-6a64-4241-a18c-8eaf697e21c7.png",
//           isDisabled: false
//         },
//         product: "62a5b992e18fb9a4ed744ae0",
//         content: "@Salah Tốt lắm bạn ơi. Mua ủng hộ shop đi ạ",
//         parentComment: "631430d223a09f3ffb1cbd4c",
//         isDisabled: false,
//         _id: "6315ea7524c75f023f145d7c",
//         replies: [],
//         createdAt: "2022-09-05T12:24:21.318Z",
//         updatedAt: "2022-09-05T12:24:21.318Z"
//       }
//     ],
//     createdAt: "2022-09-04T05:00:02.781Z",
//     updatedAt: "2022-09-05T12:24:21.318Z",
//     __v: 19
//   },
//   {
//     _id: "631430a823a09f3ffb1cbd1a",
//     user: {
//       _id: "62b521b13ecdc486401634eb",
//       name: "Salah",
//       email: "salah@gmail.com",
//       password: "$2a$10$bizjs.R1ngzDC5ajjalbj.auROF5bN6a4SdS6EKtGCGpqYShGW07e",
//       avatarUrl: "/images/avatar/424e1c5a-e1c4-4c35-8e98-12ab62386391.png",
//       isAdmin: false,
//       isDisabled: false,
//       createdAt: "2022-06-24T02:30:09.127Z",
//       updatedAt: "2022-09-04T04:58:19.801Z",
//       __v: 0
//     },
//     product: "62aa197867d4d9cfcc7e704e",
//     content: "Đi giày này có người yêu không shop ơi",
//     isDisabled: false,
//     replies: [],
//     createdAt: "2022-09-04T04:59:20.215Z",
//     updatedAt: "2022-09-04T04:59:20.215Z",
//     __v: 0
//   },
//   {
//     _id: "63142f8c23a09f3ffb1cbcc4",
//     user: {
//       _id: "6277dd1e089bebb4a4271de7",
//       name: "Khoa Pug",
//       email: "khoapug@test.com",
//       password: "$2a$10$bizjs.R1ngzDC5ajjalbj.auROF5bN6a4SdS6EKtGCGpqYShGW07e",
//       avatarUrl: "/images/avatar/f018f4be-07b6-464c-b592-875ed9d33380.png",
//       isAdmin: false,
//       isDisabled: false,
//       createdAt: "2022-05-08T15:09:18.892Z",
//       updatedAt: "2022-09-04T04:42:53.547Z",
//       __v: 0
//     },
//     product: "62a028c3c82fef7d8e2af52d",
//     content: "Giày mang cao lên m9 luôn á shop ơi",
//     isDisabled: false,
//     replies: [
//       {
//         user: {
//           _id: "624b98120aac26127bb0fbef",
//           name: "Admin",
//           email: "nbs.admin@quocbaoit.com",
//           password: "$2a$10$bizjs.R1ngzDC5ajjalbj.auROF5bN6a4SdS6EKtGCGpqYShGW07e",
//           isAdmin: true,
//           __v: 0,
//           createdAt: "2022-04-05T01:14:58.147Z",
//           updatedAt: "2022-09-05T15:19:17.891Z",
//           avatarUrl: "/images/avatar/98d0b7ae-6a64-4241-a18c-8eaf697e21c7.png",
//           isDisabled: false
//         },
//         product: "62a028c3c82fef7d8e2af52d",
//         content: "Cảm ơn Khoa Pug ủng hộ nhé",
//         parentComment: "63142f8c23a09f3ffb1cbcc4",
//         isDisabled: false,
//         _id: "63147971c631f3ba2bb418a6",
//         replies: [],
//         createdAt: "2022-09-04T10:09:53.559Z",
//         updatedAt: "2022-09-04T10:09:53.559Z"
//       }
//     ],
//     createdAt: "2022-09-04T04:54:36.943Z",
//     updatedAt: "2022-09-04T10:09:53.559Z",
//     __v: 1
//   },
//   {
//     _id: "6314121c23a09f3ffb1cba88",
//     user: {
//       _id: "62f7e09c5e6ac0ae18128e3d",
//       name: "Pham Nhut",
//       email: "phamnhut@gmail.com",
//       password: "$2a$10$BhHCTyP5g.I/rpNaZps9rOT6ITckApI7S6kBpmKCA4X66.X1cCyOq",
//       avatarUrl: "/images/avatar/2bb6f88a-d29f-44e2-a1c9-9533f2494031.png",
//       isAdmin: false,
//       isDisabled: false,
//       createdAt: "2022-08-13T17:34:20.668Z",
//       updatedAt: "2022-08-26T14:38:07.133Z",
//       __v: 0
//     },
//     product: "62f7e2255e6ac0ae18128ed5",
//     content: "i love it",
//     isDisabled: false,
//     replies: [],
//     createdAt: "2022-09-04T02:49:00.422Z",
//     updatedAt: "2022-09-04T02:49:00.422Z",
//     __v: 0
//   },
//   {
//     _id: "63123fbfe3a2dd1af061ba07",
//     user: {
//       _id: "62f7e09c5e6ac0ae18128e3d",
//       name: "Pham Nhut",
//       email: "phamnhut@gmail.com",
//       password: "$2a$10$BhHCTyP5g.I/rpNaZps9rOT6ITckApI7S6kBpmKCA4X66.X1cCyOq",
//       avatarUrl: "/images/avatar/2bb6f88a-d29f-44e2-a1c9-9533f2494031.png",
//       isAdmin: false,
//       isDisabled: false,
//       createdAt: "2022-08-13T17:34:20.668Z",
//       updatedAt: "2022-08-26T14:38:07.133Z",
//       __v: 0
//     },
//     product: "62b462ceb2eb2ab245d33327",
//     content: "test",
//     isDisabled: false,
//     replies: [],
//     createdAt: "2022-09-02T17:39:11.067Z",
//     updatedAt: "2022-09-02T17:39:11.067Z",
//     __v: 0
//   },
//   {
//     _id: "63123daee3a2dd1af061b776",
//     user: {
//       _id: "62f7e09c5e6ac0ae18128e3d",
//       name: "Pham Nhut",
//       email: "phamnhut@gmail.com",
//       password: "$2a$10$BhHCTyP5g.I/rpNaZps9rOT6ITckApI7S6kBpmKCA4X66.X1cCyOq",
//       avatarUrl: "/images/avatar/2bb6f88a-d29f-44e2-a1c9-9533f2494031.png",
//       isAdmin: false,
//       isDisabled: false,
//       createdAt: "2022-08-13T17:34:20.668Z",
//       updatedAt: "2022-08-26T14:38:07.133Z",
//       __v: 0
//     },
//     product: "62aa1a8c67d4d9cfcc7e706f",
//     content: "nhut test comment",
//     isDisabled: false,
//     replies: [],
//     createdAt: "2022-09-02T17:30:22.927Z",
//     updatedAt: "2022-09-02T17:30:22.927Z",
//     __v: 0
//   },
//   {
//     _id: "63123557e3a2dd1af061b573",
//     user: {
//       _id: "62f7e09c5e6ac0ae18128e3d",
//       name: "Pham Nhut",
//       email: "phamnhut@gmail.com",
//       password: "$2a$10$BhHCTyP5g.I/rpNaZps9rOT6ITckApI7S6kBpmKCA4X66.X1cCyOq",
//       avatarUrl: "/images/avatar/2bb6f88a-d29f-44e2-a1c9-9533f2494031.png",
//       isAdmin: false,
//       isDisabled: false,
//       createdAt: "2022-08-13T17:34:20.668Z",
//       updatedAt: "2022-08-26T14:38:07.133Z",
//       __v: 0
//     },
//     product: "624abe2f071a39dc8512adb6",
//     content: "hihi i doing test create product comment",
//     isDisabled: false,
//     replies: [],
//     createdAt: "2022-09-02T16:54:47.129Z",
//     updatedAt: "2022-09-02T16:54:47.129Z",
//     __v: 0
//   },
//   {
//     _id: "63123510e3a2dd1af061b536",
//     user: {
//       _id: "62f7e09c5e6ac0ae18128e3d",
//       name: "Pham Nhut",
//       email: "phamnhut@gmail.com",
//       password: "$2a$10$BhHCTyP5g.I/rpNaZps9rOT6ITckApI7S6kBpmKCA4X66.X1cCyOq",
//       avatarUrl: "/images/avatar/2bb6f88a-d29f-44e2-a1c9-9533f2494031.png",
//       isAdmin: false,
//       isDisabled: false,
//       createdAt: "2022-08-13T17:34:20.668Z",
//       updatedAt: "2022-08-26T14:38:07.133Z",
//       __v: 0
//     },
//     product: "624abe2f071a39dc8512adb6",
//     content: "test notification",
//     isDisabled: false,
//     replies: [],
//     createdAt: "2022-09-02T16:53:36.026Z",
//     updatedAt: "2022-09-02T16:53:36.026Z",
//     __v: 0
//   },
//   {
//     _id: "63123112e3a2dd1af061b501",
//     user: {
//       _id: "62f7e09c5e6ac0ae18128e3d",
//       name: "Pham Nhut",
//       email: "phamnhut@gmail.com",
//       password: "$2a$10$BhHCTyP5g.I/rpNaZps9rOT6ITckApI7S6kBpmKCA4X66.X1cCyOq",
//       avatarUrl: "/images/avatar/2bb6f88a-d29f-44e2-a1c9-9533f2494031.png",
//       isAdmin: false,
//       isDisabled: false,
//       createdAt: "2022-08-13T17:34:20.668Z",
//       updatedAt: "2022-08-26T14:38:07.133Z",
//       __v: 0
//     },
//     product: "624abe2f071a39dc8512adb6",
//     content: "how do i know shoes size ?",
//     isDisabled: false,
//     replies: [],
//     createdAt: "2022-09-02T16:36:34.140Z",
//     updatedAt: "2022-09-02T16:36:34.140Z",
//     __v: 0
//   },
//   {
//     _id: "63122fc5e3a2dd1af061b4e4",
//     user: {
//       _id: "62f7e09c5e6ac0ae18128e3d",
//       name: "Pham Nhut",
//       email: "phamnhut@gmail.com",
//       password: "$2a$10$BhHCTyP5g.I/rpNaZps9rOT6ITckApI7S6kBpmKCA4X66.X1cCyOq",
//       avatarUrl: "/images/avatar/2bb6f88a-d29f-44e2-a1c9-9533f2494031.png",
//       isAdmin: false,
//       isDisabled: false,
//       createdAt: "2022-08-13T17:34:20.668Z",
//       updatedAt: "2022-08-26T14:38:07.133Z",
//       __v: 0
//     },
//     product: "624abe2f071a39dc8512adb0",
//     content: "wow i love it",
//     isDisabled: false,
//     replies: [
//       {
//         user: {
//           _id: "624b98120aac26127bb0fbef",
//           name: "Admin",
//           email: "nbs.admin@quocbaoit.com",
//           password: "$2a$10$bizjs.R1ngzDC5ajjalbj.auROF5bN6a4SdS6EKtGCGpqYShGW07e",
//           isAdmin: true,
//           __v: 0,
//           createdAt: "2022-04-05T01:14:58.147Z",
//           updatedAt: "2022-09-05T15:19:17.891Z",
//           avatarUrl: "/images/avatar/98d0b7ae-6a64-4241-a18c-8eaf697e21c7.png",
//           isDisabled: false
//         },
//         product: "624abe2f071a39dc8512adb0",
//         content: "@Pham Nhut Will you buy it?",
//         parentComment: "63122fc5e3a2dd1af061b4e4",
//         isDisabled: false,
//         _id: "6316257924c75f023f146962",
//         replies: [],
//         createdAt: "2022-09-05T16:36:10.054Z",
//         updatedAt: "2022-09-05T16:36:10.054Z"
//       },
//       {
//         user: {
//           _id: "62f7e09c5e6ac0ae18128e3d",
//           name: "Pham Nhut",
//           email: "phamnhut@gmail.com",
//           password: "$2a$10$BhHCTyP5g.I/rpNaZps9rOT6ITckApI7S6kBpmKCA4X66.X1cCyOq",
//           avatarUrl: "/images/avatar/2bb6f88a-d29f-44e2-a1c9-9533f2494031.png",
//           isAdmin: false,
//           isDisabled: false,
//           createdAt: "2022-08-13T17:34:20.668Z",
//           updatedAt: "2022-08-26T14:38:07.133Z",
//           __v: 0
//         },
//         product: "624abe2f071a39dc8512adb0",
//         content: "@Pham Nhut dadadasdad",
//         parentComment: "63122fc5e3a2dd1af061b4e4",
//         isDisabled: false,
//         _id: "6316375124c75f023f146b3d",
//         replies: [],
//         createdAt: "2022-09-05T17:52:17.904Z",
//         updatedAt: "2022-09-05T17:52:17.904Z"
//       },
//       {
//         user: {
//           _id: "62f7e09c5e6ac0ae18128e3d",
//           name: "Pham Nhut",
//           email: "phamnhut@gmail.com",
//           password: "$2a$10$BhHCTyP5g.I/rpNaZps9rOT6ITckApI7S6kBpmKCA4X66.X1cCyOq",
//           avatarUrl: "/images/avatar/2bb6f88a-d29f-44e2-a1c9-9533f2494031.png",
//           isAdmin: false,
//           isDisabled: false,
//           createdAt: "2022-08-13T17:34:20.668Z",
//           updatedAt: "2022-08-26T14:38:07.133Z",
//           __v: 0
//         },
//         product: "624abe2f071a39dc8512adb0",
//         content: "@Pham Nhut qeqweqwe",
//         parentComment: "63122fc5e3a2dd1af061b4e4",
//         isDisabled: false,
//         _id: "6316379024c75f023f146b4e",
//         replies: [],
//         createdAt: "2022-09-05T17:53:20.921Z",
//         updatedAt: "2022-09-05T17:53:20.921Z"
//       }
//     ],
//     createdAt: "2022-09-02T16:31:01.981Z",
//     updatedAt: "2022-09-05T18:07:37.583Z",
//     __v: 3
//   },
//   {
//     _id: "63122ef0e3a2dd1af061b4ae",
//     user: {
//       _id: "62f7e09c5e6ac0ae18128e3d",
//       name: "Pham Nhut",
//       email: "phamnhut@gmail.com",
//       password: "$2a$10$BhHCTyP5g.I/rpNaZps9rOT6ITckApI7S6kBpmKCA4X66.X1cCyOq",
//       avatarUrl: "/images/avatar/2bb6f88a-d29f-44e2-a1c9-9533f2494031.png",
//       isAdmin: false,
//       isDisabled: false,
//       createdAt: "2022-08-13T17:34:20.668Z",
//       updatedAt: "2022-08-26T14:38:07.133Z",
//       __v: 0
//     },
//     product: "62f7e2255e6ac0ae18128ed5",
//     content: "good",
//     isDisabled: false,
//     replies: [],
//     createdAt: "2022-09-02T16:27:28.886Z",
//     updatedAt: "2022-09-02T16:27:28.886Z",
//     __v: 0
//   }
// ];
const CommentComponent = () => {
  const dispatch = useDispatch();
  const getAllComment = useSelector((state) => state.productListCommentAdmin);
  const { comments } = getAllComment;
  const onAvatarLoadError = (e) => {
    e.currentTarget.onerror = null; // prevents looping
    e.currentTarget.src = "../images/avatar/default.png";
  };

  const loadDataComment = useCallback(() => {
    dispatch(listCommentProductsAdminAll());
  }, [dispatch]);

  useEffect(() => loadDataComment(), [loadDataComment]);

  return (
    <div className="wrap-comment p-3">
      <h3>PRODUCT COMMENT</h3>
      <div className="list-comment rounded mt-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Content</th>
              <th>Author</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {comments?.length > 0 ? (
              comments?.map((item, index) => {
                return (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      <Link to={`/products/${item.product}`}>{item.content}</Link>
                    </td>
                    <td>
                      <img
                        className="img-xs rounded-circle p-1"
                        src={item.user.avatarUrl}
                        onError={onAvatarLoadError}
                        alt="User avatar"
                      />
                      {item.user.name}
                    </td>
                    <td>{moment(item.createdAt).calendar()}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4" className="p-2 bg-light border">
                  There are no comments for this product
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default CommentComponent;
