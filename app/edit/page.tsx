'use client';

import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { timelineData } from '@/data/timeline-data';

export default function TimelineEditor() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      title: {
        media: {
          url: timelineData.title.media.url,
          caption: timelineData.title.media.caption,
          credit: timelineData.title.media.credit,
        },
        text: {
          headline: timelineData.title.text.headline,
          text: timelineData.title.text.text,
        },
      },
      events: timelineData.events,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'events',
  });

  const onSubmit = async (data: any) => {
      try {
        const response = await fetch('/api/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        const result = await response.json();
        
        if (result.success) {
          alert('时间线数据已成功保存！');
        } else {
          throw new Error(result.error);
        }
      } catch (error) {
        alert('保存失败：' + (error as Error).message);
        console.error('保存失败：', error);
      }
    };

  return (
    <div className="max-w-4xl mx-auto p-6" >
      <h1 className="text-2xl font-bold mb-6">时间线编辑器</h1>
      <div className="flex justify-between items-center mb-6">
        <a
          href="/"
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 inline-flex items-center"
        >
          <span className="inline-block">← 返回主页</span>
        </a>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          保存时间线
        </button>
        {/* 标题部分 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">标题信息</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">媒体 URL</label>
              <input
                {...register('title.media.url')}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">媒体说明</label>
              <input
                {...register('title.media.caption')}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">媒体来源</label>
              <input
                {...register('title.media.credit')}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">标题</label>
              <input
                {...register('title.text.headline')}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">描述</label>
              <textarea
                {...register('title.text.text')}
                className="w-full border rounded p-2"
                rows={4}
              />
            </div>
          </div>
        </div>

        {/* 事件列表 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">事件列表</h2>
            <button
              type="button"
              onClick={() => append({
                media: { url: '', caption: '', credit: '' },
                //@ts-ignore
                start_date: { year: '', month: '', day: '' },
                text: { headline: '', text: '' },
              })}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              添加事件
            </button>
          </div>

          <div className="space-y-6">
            {fields.map((field, index) => (
              <div key={field.id} className="border p-4 rounded">
                <div className="flex justify-between mb-4">
                  <h3 className="font-medium">事件 #{index + 1}</h3>
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="text-red-500"
                  >
                    删除
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">媒体 URL</label>
                    <input
                      {...register(`events.${index}.media.url`)}
                      className="w-full border rounded p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">媒体说明</label>
                    <input
                      {...register(`events.${index}.media.caption`)}
                      className="w-full border rounded p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">媒体来源</label>
                    <input
                      {...register(`events.${index}.media.credit`)}
                      className="w-full border rounded p-2"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="block text-sm font-medium mb-1">年</label>
                      <input
                        {...register(`events.${index}.start_date.year`)}
                        className="w-full border rounded p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">月</label>
                      <input
                        {...register(`events.${index}.start_date.month`)}
                        className="w-full border rounded p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">日</label>
                      <input
                        {...register(`events.${index}.start_date.day`)}
                        className="w-full border rounded p-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">标题</label>
                    <input
                      {...register(`events.${index}.text.headline`)}
                      className="w-full border rounded p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">描述</label>
                    <textarea
                      {...register(`events.${index}.text.text`)}
                      className="w-full border rounded p-2"
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </form>
    </div>
  );
}