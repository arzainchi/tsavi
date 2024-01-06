<?php
namespace App\Http\Services;

use App\Models\Role;
use Illuminate\Support\Facades\DB;

class RoleService
{
    public function getAllPaginate($filter, $page = 1, $per_page = 10)
    {
        $query = Role::query();
        $query->when(($filter && $filter['name']), function ($query) use ($filter) {
            $query->where('name', 'like', '%'. $filter['name'] .'%');
        });
        return $query->paginate($per_page, ['*'], 'page', $page)->appends('per_page', $per_page);
    }

    public function getById($id)
    {
        $data = Role::find($id);
        if (!$data) {
            return [
                'status' => false,
                'erros' => 'not found',
            ];
        }

        $data->access = json_decode($data->access, true);
        return [
            'status' => true,
            'data' => $data,
        ];
    }

    public function store($payload)
    {
        db::beginTransaction();
        try {
            $payload['access'] = json_encode($payload['access']);
            $data = Role::create($payload);
            db::commit();
            return [
                'status' => true,
                'data' => $data,
            ];
        } catch (\Throwable $th) {
            db::rollBack();
            return [
                'status' => false,
                'errors' => $th->getMessage(),
            ];
        }
    }

    public function update($payload, $id)
    {
        DB::beginTransaction();
        try {
            $data = Role::where('id', '=', $id)->update($payload);
            db::commit();
            return [
                'status' => true,
                'data' => $data,
            ];
        } catch (\Throwable $th) {
            db::rollBack();
            return [
                'status' => false,
                'errors' => $th->getMessage(),
            ];
        }
    }

    public function delete($id)
    {
        DB::beginTransaction();
        try {
            $data = Role::where('id', '=', $id)->delete();
            db::commit();
            return [
                'status' => true,
                'data' => $data,
            ];
        } catch (\Throwable $th) {
            db::rollBack();
            return [
                'status' => false,
                'errors' => $th->getMessage(),
            ];
        }
    }
}
